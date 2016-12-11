define(['q', 'assets/loader'], function(Q, AssetsLoader) {
  var SHEET_NAME = 'bullet';
  var ASSET_FILENAME = 'bullet.png';
  var ASSET_PROPERTIES = {
    tilew: 15, tileh: 15
  };

  var waitUntilLoaded = function waitUntilLoaded() {
    return AssetsLoader.waitUntilLoaded(ASSET_FILENAME);
  };

  waitUntilLoaded().then(function() {
    Q.sheet(SHEET_NAME, ASSET_FILENAME, ASSET_PROPERTIES);
  });

  return {
    getName: function() {
      return SHEET_NAME;
    },
    waitUntilLoaded: waitUntilLoaded
  };
});
