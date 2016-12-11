define([
  'assets/tile/sprites/player',
  'sprites/bullet',
  'q'
], function(
  PlayerLoader,
  Bullet,
  Q
) {
  Q.animations(PlayerLoader.getName(), {
    run_right: {
      frames: [1]
    },
    run_left: {
      frames: [2]
    },
    fire_right: {
      frames: [3], trigger: 'fired', rate: 1/30, next: 'run_right'
    },
    fire_left: {
      frames: [4], trigger: 'fired', rate: 1/30, next: 'run_left'
    }
  });

  Q.Sprite.extend("Player", {
    init: function(p) {
      this._super(p, {
        sprite: PlayerLoader.getName(),
        sheet: PlayerLoader.getName()
      });
      this.add('2d, platformerControls, animation');

      Q.input.on("fire",this,"fire");
      this.on("fired", this, "launchBullet");
    },

    step: function() {
      if(this.p.direction === 'right') {
        this.play('run_right');
      } else if (this.p.direction === 'left') {
        this.play('run_left');
      }
    },

    fire: function() {
      if(this.p.direction === 'right') {
        this.play('fire_right', 1);
      } else if (this.p.direction === 'left') {
        this.play('fire_left', 1);
      }
    },

    launchBullet: function() {
      var multiplier;
      var bullet;

      if (this.p.direction === 'right') {
        multiplier = 1;
      } else if (this.p.direction === 'left') {
        multiplier = -1;
      } else {
        return;
      }

      bullet = new Bullet({
        x: this.p.x + multiplier * 20,
        y: this.p.y,
        vx: multiplier * 100,
        vy: 0
      });
      this.stage.insert(bullet);
    }
  });

  return Q.Player;
});
