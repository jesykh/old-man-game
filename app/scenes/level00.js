define([
  'q', 'sprites/player', 'assets/loader', 'assets/floor'
], function(
  Q, Player, AssetsLoader, FloorSheet
) {
  var STAGE_NAME = 'level00';
  var TILE_SCHEME_FILENAME = 'level00.json';

  function setCollisionLayerOnStage(stage) {
    var tileLayer = new Q.TileLayer({
      dataAsset: TILE_SCHEME_FILENAME,
      sheet: FloorSheet.getName()
    });
    stage.collisionLayer(tileLayer);
  }

  function setPlayerOnStage(stage) {
    var player = stage.insert(new Player({x: 410, y: 90}));
    stage.add("viewport").follow(player);
  }

  Q.scene(STAGE_NAME, function(stage) {
    setCollisionLayerOnStage(stage);
    setPlayerOnStage(stage);
  });

  return {
    stageLevel: function() {
      AssetsLoader.then(function() {
        FloorSheet.setup();
        Q.stageScene(STAGE_NAME);
      });
    }
  };
});
