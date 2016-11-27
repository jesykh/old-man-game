define([
  'promise',
  'lodash'
], function(
  Promise,
  _
) {
  function waitForLoaders(loaders) {
    return Promise.all(_.map(loaders, function(loader) {
      return loader.waitUntilLoaded();
    }));
  }

  return {
    waitForLoaders: waitForLoaders
  };
});
