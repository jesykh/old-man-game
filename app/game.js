define([
  'q',
  'scenes/scene',
  'json!scenes/levels_config.json',
], function(
  Q,
  Level00Scene,
  LevelsConfig
) {
  var STAGE_NAME = 'level00';
  Level00Scene.stageLevel(STAGE_NAME, LevelsConfig[STAGE_NAME]);
});
