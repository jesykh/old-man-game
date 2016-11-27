define(['q', 'assets/loader'], function(Q, AssetsLoader) {
  var ASSET_FILENAME = 'level00.json';

  var waitUntilLoaded = function waitUntilLoaded() {
    return AssetsLoader.waitUntilLoaded(ASSET_FILENAME);
  };

  return {
    getFilename: function() {
      return ASSET_FILENAME;
    },
    waitUntilLoaded: waitUntilLoaded
  };
});
