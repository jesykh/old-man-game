define([
  'assets/tile/sprites/floor',
  'assets/tile/schemes/level00',
  'promise'
], function(
  FloorSheet,
  TileScheme,
  Promise
) {
  function waitForLevelAssets() {
    return Promise.all([
      TileScheme.waitForLoaded(),
      FloorSheet.waitForLoaded()
    ]);
  }

  return {
    waitForLevelAssets: waitForLevelAssets
  };
});
