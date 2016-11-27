define([
  'q',
  'sprites/player',
  'sprites/enemy',
  'scenes/level00/asset_loader',
  'scenes/level00/tile_layer_provider'
], function(
  Q,
  Player,
  Enemy,
  AssetsLoader,
  TileLayerProvider
) {
  var STAGE_NAME = 'level00';
  var INITIAL_PLAYER_LOCATION = {x: 410, y: 90};

  function _setCollisionLayer() {
    var tileLayer = TileLayerProvider.create();
    this.collisionLayer(tileLayer);
  }

  function _setPlayer() {
    var player = new Player(INITIAL_PLAYER_LOCATION);
    this.insert(player);
    this.add("viewport").follow(player);
  }

  function _setEnemies() {
    var enemy = new Enemy({x: 420, y: 90});
    this.insert(enemy);
  }

  Q.scene(STAGE_NAME, function(stage) {
    _setCollisionLayer.call(stage);
    _setPlayer.call(stage);
    _setEnemies.call(stage);
  });

  return {
    stageLevel: function() {
      AssetsLoader.waitForLevelAssets().then(function() {
        Q.stageScene(STAGE_NAME);
      });
    }
  };
});
