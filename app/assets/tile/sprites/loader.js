define([
  'assets/tile/sprites/floor'
  ], function(
    FloorSheetAsset
  ) {
    var SPRITE_SHEETS = {
      floor: FloorSheetAsset
    };

    return {
      getByName: function getByName(slug) {
        return SPRITE_SHEETS[slug];
      }
    };
  });
