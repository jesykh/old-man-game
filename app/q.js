define([
    'quintus',
    'promise'
  ], function(
    quintus,
    Promise
  ) {
    var Q = quintus({ development: true })
      .include('Sprites, Scenes, Input, 2D, UI, Anim')
      .setup({
        maximize: true
      })
      .controls();

    Q.sheetPromise = function(sheetName, fileName) {
      var args = arguments;
      return Q.loadPromise(fileName)
        .then(function() {
          Q.sheet.apply(Q, args);
        });
    };

    Q.loadPromise = function(fileName) {
      var deferred = Promise.defer();

      if (Q.assets[fileName]) {
        deferred.resolve();
        return;
      }

      Q.load(fileName, function() {
        deferred.resolve();
      });

      return deferred.promise;
    };

    return Q;
  });
