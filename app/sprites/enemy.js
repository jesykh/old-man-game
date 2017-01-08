define([
  'q',
  'promise'
], function(
  Q,
  Promise
) {
  var ASSET_FILENAME = 'enemy_sheet.png';
  var ASSET_LABEL = 'enemy';

  Q.Sprite.extend('Enemy', {
    init: function(p) {
      this._super(p, {
        sheet: 'enemy', vx: 100
      });
      this.add('2d, aiBounce');
    }
  });

  var deferred = Promise.defer();

  Q.sheetPromise(ASSET_LABEL, ASSET_FILENAME, {
    tilew: 30, tileh: 24
  }).then(function() {
    deferred.resolve(Q.Enemy);
  });

  return deferred.promise;
});
