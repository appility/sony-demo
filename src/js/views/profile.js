/* jshint latedef: true, debug:true */
/* global define */

define([
	'jquery',
	'underscore',
	'backbone',
	'views/base'
], function($, _, Backbone, BaseView) {

	var ProfileView = BaseView.extend({

		template: Appility.Templates['profile.html'],

		events: {
			'click button': 'actionUserUpdate',
			'ajaxError': 'handleAjaxError',
			'ajaxSuccess': 'handleAjaxSuccess'
		},

		initialize: function() {
			this.listenTo(this.model, 'change', function(model, errors) {
				this.render();
			}, this);
			BaseView.prototype.initialize.call(this);
		},

		actionUserUpdate: function(event) {
			event.preventDefault();
			this.saveForm();
		},

		render: function() {
			var templateResult = this.template(this.model.toJSON());
			this.$el.html(templateResult);
			return this;
		}
	});

	return ProfileView;

});