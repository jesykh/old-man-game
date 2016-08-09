define([
  'q',
  'sprites/player',
  'assets/loader',
  'assets/floor',
  'assets/data/level00_tile_scheme',
  'promise'
], function(
  Q, Player, AssetsLoader, FloorSheet, TileScheme, Promise
) {
  var STAGE_NAME = 'level00';

  function setCollisionLayer() {
    var tileLayer = new Q.TileLayer({
      dataAsset: TileScheme.getFilename(),
      sheet: FloorSheet.getName()
    });
    this.collisionLayer(tileLayer);
  }

  function setPlayer(stage) {
    var player = this.insert(new Player({x: 410, y: 90}));
    this.add("viewport").follow(player);
  }

  Q.scene(STAGE_NAME, function(stage) {
    setCollisionLayer.call(stage);
    setPlayer.call(stage);
  });

  return {
    stageLevel: function() {
      Promise.all([
        TileScheme.waitForLoaded(),
        FloorSheet.waitForLoaded()
      ]).then(function() {
        Q.stageScene(STAGE_NAME);
      });
    }
  };
});
