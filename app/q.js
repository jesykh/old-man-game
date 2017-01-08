define([
    'quintus',
    'promise'
  ], function(
    quintus,
    Promise
  ) {
    var Q = quintus({ development: true })
      .include("Sprites, Scenes, Input, 2D, UI, Anim")
      .setup({
        maximize: true
      })
      .controls();

    Q.sheetPromise = function(sheetName, fileName) {
      var deferred = Promise.defer();
      var args = arguments;
      Q.load(fileName, function() {
        Q.sheet.apply(Q, args);
        deferred.resolve();
      });

      return deferred.promise;
    };

    return Q;
  });
