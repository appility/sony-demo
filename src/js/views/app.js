/* jshint latedef: true, debug:true */
/* global define */

define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    var App = {
        root: "/", // The root path to run the application through.
        URL: "/", // Base application URL
        API: "/api" // Base API URL (used by models & collections
    };

    return App;

});