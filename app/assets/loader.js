define(['q', 'promise'], function(Q, Promise) {
  var deferred = Promise.defer();
  var assetsToLoad = ['level00.json', 'floor.png'];
  Q.load(assetsToLoad.join(', '), function() {
    deferred.resolve();
  });

  return deferred.promise;
});
