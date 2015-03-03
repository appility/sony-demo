/* jshint latedef: true, debug:true */
/* global define */

define([
	'jquery',
	'underscore',
	'backbone',
	'models/base'
], function($, _, Backbone, BaseModel) {

	var RegisterModel = BaseModel.extend({

		initialize: function() {
			BaseModel.prototype.initialize.call(this);
		},

		validate: function(attrs) {
			var errorMessages = [];
			if (this.isEmptyString(attrs.firstName)) {
				errorMessages.push('You must add a first name.');
			}
			if (this.isEmptyString(attrs.lastName)) {
				errorMessages.push('You must add a last name.');
			}
			if (this.isEmptyString(attrs.username)) {
				errorMessages.push('You must choose a username.');
			}
			if (this.isEmptyString(attrs.phoneNumber)) {
				errorMessages.push('You must add a phone number.');
			}
			if (this.isEmptyString(attrs.password)) {
				errorMessages.push('You must choose a password.');
			}
			if (errorMessages.length > 0) {
				return errorMessages;
			}
		},

		sync: function(method, model, options) {
			options.url = '/api/register/' + this.get('username');
			options.type = 'PUT';
			return Backbone.sync(method, model, options);
		}

	});

	return RegisterModel;

});