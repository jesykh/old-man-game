require.config({
  paths: {
    'components': '../bower_components',
    'quintus': '../lib/quintus-all',
    'lodash': '../bower_components/lodash/lodash',
    'promise': '../bower_components/q/q',
    'text': '../bower_components/requirejs-plugins/lib/text',
    'json': '../bower_components/requirejs-plugins/src/json',
    'require-promise': '../bower_components/requirejs-promise/requirejs-promise'
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
