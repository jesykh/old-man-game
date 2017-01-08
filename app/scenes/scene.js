define([
  'q',
  'require-promise!sprites/player',
  'tile_layers/all',
  'require-promise!sprites/enemy',
  'json!scenes/levels_config.json',
  'lodash'
], function(
  Q,
  Player,
  TileLayers,
  Enemy,
  LevelsConfig,
  _
) {
  function _setupScene(stageName, stageConfig) {
      function _setCollisionLayer() {
        var TileLayer = TileLayers.CLASSES[stageConfig.collisionLayer.tileLayer];
        var tileLayer = new TileLayer({
          dataAsset: stageConfig.collisionLayer.scheme
        });
        this.collisionLayer(tileLayer);
      }

      function _setPlayer() {
        var player = new Player(stageConfig.player.properties);
        this.insert(player);
        this.add('viewport').follow(player);
      }

      function _setEnemies() {
        var stage = this;
        _.each(stageConfig.enemies, function(enemyConfig) {
          var enemy = new Enemy(enemyConfig.properties);
          stage.insert(enemy);
        });
      }

      Q.scene(stageName, function(stage) {
        _setCollisionLayer.call(stage);
        _setPlayer.call(stage);
        _setEnemies.call(stage);
      });
  }

  return {
    stageLevel: function(stageName, stageConfig) {
      _setupScene(stageName, stageConfig);
      Q.loadPromise(stageConfig.collisionLayer.scheme)
        .then(function() {
          Q.stageScene(stageName);
        });
    }
  };
});
