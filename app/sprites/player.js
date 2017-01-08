define([
  'require-promise!sprites/bullet',
  'q',
  'promise'
], function(
  Bullet,
  Q,
  Promise
) {
  var ANIMATION_NAME = 'whatever_else';
  var SHEET_NAME = 'player';
  var SHEET_PROPERTIES = {
    tilew: 24, tileh: 49
  };
  var SHEET_FILENAME = 'player_sheet.png';

  Q.animations(ANIMATION_NAME, {
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
        sprite: ANIMATION_NAME,
        sheet: SHEET_NAME
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

  var deferred = Promise.defer();

  Q.sheetPromise(SHEET_NAME, SHEET_FILENAME, SHEET_PROPERTIES)
    .then(function() {
      deferred.resolve(Q.Player);
    });

  return deferred.promise;
});
