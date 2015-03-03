/* jshint latedef: true, debug:true */
/* global define */

define([
	'jquery',
	'underscore',
	'backbone',
	'views/app',
	'views/base'
], function($, _, Backbone, App, BaseView) {

	var RegisterView = BaseView.extend({

		template: Appility.Templates['register.html'],

		events: _.extend({
			'click button': 'actionRegister',
			'ajaxError': 'handleAjaxError',
			'ajaxSuccess': 'handleAjaxSuccess'
		}, BaseView.prototype.events),

		initialize: function() {
			BaseView.prototype.initialize.call(this);
		},

		render: function() {
			var templateResult = this.template(this.model.toJSON());
			this.$el.html(templateResult);
			return this;
		},

		save: function(attributes, options) {
			options.type = 'PUT';
			return Backbone.Model.prototype.save.call(this, attributes, options);
		},

		actionRegister: function(event) {
			event.preventDefault();
			this.saveForm();
		},

		handleAjaxSuccess: function(event, request, settings, response) {
			var responseObj = jQuery.parseJSON(request.responseText);
			Backbone.history.navigate('/signin', {
				trigger: true
			});
		}
	});

	return RegisterView;

});