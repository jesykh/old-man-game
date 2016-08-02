define(['q', 'assets/loader'], function(Q, AssetsLoader) {
  var SHEET_NAME = 'floor';
  var ASSET_FILENAME = 'floor.png';
  var ASSET_PROPERTIES = {
    tilew: 32, tileh: 32
  };

  return {
    getName: function() {
      return SHEET_NAME;
    },
    setup: function() {
      AssetsLoader.then(function() {
        Q.sheet(SHEET_NAME, ASSET_FILENAME, ASSET_PROPERTIES);
      });
    }
  };
});
