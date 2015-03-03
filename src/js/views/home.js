/* jshint latedef: true, debug:true */
/* global define, Appility */

define([
	'backbone',
	'views/app',
	'views/base'
], function(Backbone, App, BaseView) {

	'use strict';

	var HomeView = BaseView.extend({

		template: Appility.Templates['home.html'],

		initialize: function() {
			BaseView.prototype.initialize.call(this);
		},

		render: function() {
			var templateResult = this.template();
			this.$el.html(templateResult);
			return this;
		}
	});

	return HomeView;

});