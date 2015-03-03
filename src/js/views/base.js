/* jshint undef: false, unused: false, latedef: true, debug: true*/
/* global define, _, alert  */

define([
	'jquery',
	'backbone'
], function($, Backbone) {

	var BaseView = Backbone.View.extend({

		initialize: function() {
			this.mandatory_fields = $('.js-mandatory-field');
			if (this.model) {
				this.listenTo(this.model, 'invalid', function(model, errors) {
					this.handleValidationErrors(errors);
				}, this);
			}
		},

		handleEmpty: function() {
			this.$el.html('<p>No results.</p>');
		},

		handleValidationErrors: function(errors) {
			this.showErrors(errors);
		},

		saveForm: function() {
			this.clearErrors();
			var arr = this.$('form').serializeArray();
			var data = _(arr).reduce(function(acc, field) {
				acc[field.name] = field.value;
				return acc;
			}, {});
			this.model.save(data);
		},

		showErrors: function(errors) {
			var messages = '<h4>There has been an error:</h4><ul>';
			_.each(errors, function(error, index) {
				messages += '<li>' + error + '</li>';
			}, this);
			messages += '</ul>';
			this.$('.errors').html(messages).show();
		},

		clearErrors: function(errors) {
			this.$('.errors').empty().hide();
		},

		handleAjaxError: function(event, request, settings, thrownError) {
			var statuses = {
				'403': function(item) {
					return 'Not authenticated';
				},
				'404': function(item) {
					return 'Not found';
				},
				'500': function(item) {
					return 'Internal server error';
				},
				'other': function(item) {
					return 'There has been an error';
				}
			};
			var errors = [];
			var response = {};
			if (request.status === 403 || request.status === 409) {
				var shitJSON = request.responseText;
				var fixedJSON = shitJSON.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ');
				response = JSON.parse(fixedJSON);
			} else {
				response.msg = statuses[request.status] ? statuses[request.status]() : statuses.other();
			}
			errors.push(response.msg);
			this.showErrors(errors);
		},

		close: function() {
			this.$el.empty();
			this.remove();
			this.unbind();
		}

	});

	return BaseView;

});