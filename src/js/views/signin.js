/* jshint latedef: true, debug:true */
/* global define, Appility */

define([
	'jquery',
	'underscore',
	'backbone',
	'views/app',
	'views/base'
], function($, _, Backbone, App, BaseView) {

	var SigninView = BaseView.extend({

		template: Appility.Templates['signin.html'],

		events: {
			'click button': 'actionSignin',
			'ajaxError': 'handleAjaxError',
			'ajaxSuccess': 'handleAjaxSuccess'
		},

		initialize: function() {
			BaseView.prototype.initialize.call(this);
		},

		render: function() {
			var templateResult = this.template();
			this.$el.html(templateResult);
			return this;
		},

		actionSignin: function(event) {
			event.preventDefault();
			this.saveForm();
		},

		handleAjaxSuccess: function(event, request, settings, response) {
			var responseObj = jQuery.parseJSON(request.responseText);
			App.session.save(responseObj);
			Backbone.history.navigate('/', {
				trigger: true
			});
		}
	});

	return SigninView;

});