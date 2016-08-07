define(['quintus'], function(quintus) {
  var Q = quintus({ development: true })
    .include("Sprites, Scenes, Input, 2D, UI")
    .setup({
      maximize: true
    })
    .controls();

  return Q;
});
