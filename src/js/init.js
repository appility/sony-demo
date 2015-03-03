// kick off the app

require([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'jqueryCookie',
  'templates',
  'views/app',
  'models/session',
  'views/main',
  'router'
], function($, _, Backbone, Handlebars, JQueryCookie, Templates, App, SessionModel, MainView, Router) {

  window.Appility = Appility || {};
  
  // Handlebars.registerHelper('exists', function(variable, options) {
  //   if (typeof variable !== 'undefined') {
  //       return options.fn(this);
  //   }
  // });

  $.xhrPool = []; // array of uncompleted requests
  $.xhrPool.abortAll = function() { // our abort function
    $(this).each(function(idx, jqXHR) {
      jqXHR.abort();
    });
    $.xhrPool.length = 0;
  };

  $.ajaxSetup({
    cache: false,
    beforeSend: function(jqXHR) { // before jQuery send the request we will push it to our array
      $.xhrPool.push(jqXHR);
    },
    complete: function(jqXHR) { // when some of the requests completed it will splice from the array
      var index = $.xhrPool.indexOf(jqXHR);
      if (index > -1) {
        $.xhrPool.splice(index, 1);
      }
    }
  });

  App.session = new SessionModel();

  var main = new MainView({
    el: $("body")
  });

  //Router.initialize(); // initialize router
  var router = new Router();
  Backbone.history.start({
    root: '',
    pushState: 'pushState' in window.history
  });
});