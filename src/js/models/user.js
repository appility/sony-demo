/* jshint latedef: true, debug:true */
/* global define */

define([
	'jquery',
	'underscore',
	'backbone',
	'views/app',
	'models/base'
], function($, _, Backbone, App, BaseModel) {

	var UserModel = BaseModel.extend({

		urlRoot: function() {
			return '/api/profile/' + App.session.get('userId');
		},

		initialize: function() {
			BaseModel.prototype.initialize.call(this);
		},

		onAuthChange: function() {
			alert(App.session.get('userId'));
		},

		save: function(attributes, options) {
			options = options || {};
			options.type = 'PUT';
			return Backbone.Model.prototype.save.call(this, attributes, options);
		},

		sync: function(method, model, options) {
			console.log(method);
			var customType = this.returnHTTPType(method);
			var optionsExtended = _.extend({
				type: customType,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"sessionId": App.session.get('sessionId')
				},
				contentType: 'application/json',
				accept: 'application/json',
				dataType: 'json',
			}, options);
			return Backbone.sync(method, model, optionsExtended);
		},

		parse: function(response) {
			delete response.status;
			return response;
		}
	});

	return UserModel;

});