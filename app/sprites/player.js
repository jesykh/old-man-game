define([
  'q',
  'assets/loader'
], function(
  Q,
  AssetsLoader
) {
  var ASSET_FILENAME = 'player_sheet.png';
  var ASSET_LABEL = 'player';

  Q.animations('player', {
    run_right: {
      frames: [1]
    },
    run_left: {
      frames: [2]
    }
  });

  Q.Sprite.extend("Player", {
    init: function(p) {
      this._super(p, {
        sprite: 'player',
        sheet: 'player'
      });
      this.add('2d, platformerControls, animation');
    },
    step: function() {
      if(this.p.vx > 0) {
        this.play('run_right');
      } else if(this.p.vx < 0) {
        this.play('run_left');
      }
    }
  });

  var createSheet = function createSheet() {
    Q.sheet(ASSET_LABEL, ASSET_FILENAME, {
      tilew: 24, tileh: 49
    });
  };

  AssetsLoader.waitUntilLoaded(ASSET_FILENAME).then(createSheet);

  return Q.Player;
});
