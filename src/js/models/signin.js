/* jshint latedef: true, debug:true */
/* global define */

define([
	'jquery',
	'underscore',
	'backbone',
	'models/base'
], function($, _, Backbone, BaseModel) {

	var SigninModel = BaseModel.extend({

		initialize: function() {
			BaseModel.prototype.initialize.call(this);
		},

		validate: function(attrs) {
			var errorMessages = [];

			// http://localhost:8001/api/signin/vtyty&%&%&/ghgh bad request

			if (this.isEmptyString(attrs.username)) {
				errorMessages.push('You must choose a username.');
			}
			if (this.isEmptyString(attrs.password)) {
				errorMessages.push('You must choose a password.');
			}

			if (errorMessages.length > 0) {
				return errorMessages;
			}
		},

		sync: function(method, model, options) {
			return $.ajax({
				type: 'GET',
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				contentType: 'application/json',
				accept: 'application/json',
				dataType: 'json',
				url: '/api/signin/' + this.get('username') + '/' + this.get('password')
			});
		}

	});

	return SigninModel;

});