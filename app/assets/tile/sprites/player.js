define(['q', 'assets/loader'], function(Q, AssetsLoader) {
  var SHEET_NAME = 'player';
  var ASSET_FILENAME = 'player_sheet.png';
  var ASSET_PROPERTIES = {
    tilew: 24, tileh: 49
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
