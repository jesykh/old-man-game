define([
    'q',
    'promise',
    'lodash'
  ], function(
    Q,
    Promise,
    _
  ) {
    var SHEET_NAME = 'floor';
    var SHEET_PROPERTIES = {
      tilew: 32, tileh: 32
    };
    var SHEET_FILENAME = 'floor.png';

    Q.TileLayer.extend('FloorTileLayer', {
      init: function(p) {
        p = _.extend({
          sheet: SHEET_NAME
        }, p);
        this._super(p);
      }
    });

    var deferred = Promise.defer();

    Q.sheetPromise(SHEET_NAME, SHEET_FILENAME, SHEET_PROPERTIES)
      .then(function() {
        deferred.resolve(Q.FloorTileLayer);
      });

    return deferred.promise;
  });
