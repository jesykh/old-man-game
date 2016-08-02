require.config({
  // make components more sensible
  paths: {
    'components': "../bower_components",
    'quintus': "../lib/quintus-all",
    'promise': "../bower_components/q/q"
  },
  shim: {
    'quintus': {
       exports: "Quintus"
    }
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}
