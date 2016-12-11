define([
    'assets/tile/sprites/bullet',
    'q',
    ''
  ], function(
    BulletLoader,
    Q
  ) {
    var Bullet = Q.Sprite.extend('Bullet', {
      init: function(p) {
        p.gravity = 0;
        p.collisionMask = Q.SPRITE_ENEMY;
        this._super(p, {
          sprite: BulletLoader.getName(),
          sheet: BulletLoader.getName()
        });
        this.add('2d');
      }
    });

    return Bullet;
  });
