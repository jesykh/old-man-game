define([
    'q',
    'promise'
  ], function(
    Q,
    Promise
  ) {
    var SHEET_NAME = 'bullet';
    var SHEET_PROPERTIES = {
      tilew: 15, tileh: 15
    };
    var SHEET_FILENAME = 'bullet.png';

    Q.Sprite.extend('Bullet', {
      init: function(p) {
        p.gravity = 0;
        p.collisionMask = Q.SPRITE_ENEMY;
        this._super(p, {
          sprite: SHEET_NAME,
          sheet: SHEET_NAME
        });
        this.add('2d');
      }
    });

    var deferred = Promise.defer();

    Q.sheetPromise(SHEET_NAME, SHEET_FILENAME, SHEET_PROPERTIES)
      .then(function() {
        deferred.resolve(Q.Bullet);
      });

    return deferred.promise;
  });
