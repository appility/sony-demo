// shortcut aliases

require.config({
  baseUrl: 'src/js/',
  urlArgs: 'cb=' + Math.random(),
  paths: {
    // Major libraries
    jquery: 'libs/jquery-min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    handlebars: 'libs/handlebars',
    jqueryCookie: 'libs/jquery.cookie',
    templates: 'templates/all'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    templates: {
      deps: ['handlebars'],
      exports: "templates"
    }
  }
});