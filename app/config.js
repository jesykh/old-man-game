require.config({
  // make components more sensible
  paths: {
    "components": "../bower_components"
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}
