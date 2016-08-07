define(['q'], function(Q) {
  Q.Sprite.extend("Player", {
    init: function(p) {
      this._super(p, {
        sheet: 'player'
      });
      this.add('2d, platformerControls');
    }
  });
  Q.load(["player_sheet.png"], function() {
    Q.sheet("player","player_sheet.png", {
      tilew: 30, tileh: 24
    });
  });

  return Q.Player;
});
