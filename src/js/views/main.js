/* jshint latedef: true, debug:true */
/* global define */

define([
	'jquery',
	'backbone',
	'views/nav'
], function($, Backbone, NavView) {

	'use strict';
	
	var MainView = Backbone.View.extend({

		el: 'body',

		initialize: function() {
			this.createChildViews();
		},

		createChildViews: function() {
			var navView = new NavView({
				el: this.$('nav')
			});
			navView.render();
		}
	});

	return MainView;

});
