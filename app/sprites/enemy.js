define([
  'q',
  'assets/loader'
], function(
  Q,
  AssetsLoader
) {
  var ASSET_FILENAME = 'enemy_sheet.png';
  var ASSET_LABEL = 'enemy';

  Q.Sprite.extend("Enemy", {
    init: function(p) {
      this._super(p, {
        sheet: 'enemy', vx: 100
      });
      this.add('2d, aiBounce');
    }
  });

  var createSheet = function createSheet() {
    Q.sheet(ASSET_LABEL, ASSET_FILENAME, {
      tilew: 30, tileh: 24
    });
  };

  AssetsLoader.waitUntilLoaded(ASSET_FILENAME).then(createSheet);

  return Q.Enemy;
});
