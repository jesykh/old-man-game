require.config({
  paths: {
    components: '../bower_components',
    chai: '../bower_components/chai/chai',
    quintus: '../lib/quintus-all',
    lodash: '../bower_components/lodash/lodash',
    promise: '../bower_components/q/q',
    text: '../bower_components/requirejs-plugins/lib/text',
    json: '../bower_components/requirejs-plugins/src/json',
    'require-promise': '../bower_components/requirejs-promise/requirejs-promise'
  },
  baseUrl: '/'
});

mocha.setup({
    ui: 'bdd'
});

require([
  testPathname
], function(){

  if(window.mochaPhantomJS){
    mochaPhantomJS.run();
  }
  else{
    mocha.run();
  }

});
