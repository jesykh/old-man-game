define([
  'q',
  'sprites/player',
  'sprites/enemy',
  'scenes/asset_loader',
  'json!scenes/levels_config.json',
  'assets/tile/schemes/loader',
  'assets/tile/sprites/loader',
  'lodash'
], function(
  Q,
  Player,
  Enemy,
  AssetsLoader,
  LevelsConfig,
  SchemesLoader,
  SpritesLoader,
  _
) {
  function _setupScene(stageName, stageConfig) {
      function _setCollisionLayer() {
        var tileLayer = new Q.TileLayer({
          dataAsset: SchemesLoader.getByName(stageConfig.collisionLayer.scheme).getFilename(),
          sheet: SpritesLoader.getByName(stageConfig.collisionLayer.sprite).getName()
        });
        this.collisionLayer(tileLayer);
      }

      function _setPlayer() {
        var player = new Player(stageConfig.player.properties);
        this.insert(player);
        this.add("viewport").follow(player);
      }

      function _setEnemies() {
        var stage = this;
        _.each(stageConfig.enemies, function(enemyConfig) {
          var enemy = new Enemy(enemyConfig.properties);
          stage.insert(enemy);
        });
      }

      Q.scene(stageName, function(stage) {
        _setCollisionLayer.call(stage);
        _setPlayer.call(stage);
        _setEnemies.call(stage);
      });
  }

  return {
    stageLevel: function(stageName, stageConfig) {
      _setupScene(stageName, stageConfig);
      AssetsLoader.waitForLoaders([
        SchemesLoader.getByName(stageConfig.collisionLayer.scheme),
        SpritesLoader.getByName(stageConfig.collisionLayer.sprite)
      ]).then(function() {
        Q.stageScene(stageName);
      });
    }
  };
});
