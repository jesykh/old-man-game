define(['q', 'promise'], function(Q, Promise) {
  var promises = {};
  var _scheduleLoading = function _scheduleLoading(assetFilename) {
    var deferred = Promise.defer();
    Q.load(assetFilename, function() {
      deferred.resolve();
    });
    promises[assetFilename] = deferred.promise;
  };
  var getPromiseFor = function getPromiseFor(assetFilename) {
    return promises[assetFilename];
  };
  var waitForLoaded = function waitForLoaded(assetFilename) {
    if(!getPromiseFor(assetFilename)) {
      _scheduleLoading(assetFilename);
    }
    return getPromiseFor(assetFilename);
  };

  return {
    waitForLoaded: waitForLoaded
  };
});
