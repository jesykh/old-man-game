define(['q'], function(Q) {
  Q.Sprite.extend("Player", {
    init: function(p) {
      this._super(p, {
        sheet: 'player'
      });
    }
  });
  Q.load(["player_sheet.png"], function() {
    Q.sheet("player","player_sheet.png", {
      tilew: 30, tileh: 42
    });
  });

  return Q.Player;
});
