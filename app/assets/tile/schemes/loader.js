define([
  'assets/tile/schemes/level00'
  ], function(
    Level00SchemeAsset
  ) {
    var SCHEMES_ASSETS = {
      level00: Level00SchemeAsset
    };

    return {
      getByName: function getByName(slug) {
        return SCHEMES_ASSETS[slug];
      }
    };
  });
