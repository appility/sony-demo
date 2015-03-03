/* jshint undef: false, unused: false, latedef: true, debug: true*/
/* global define, _, console  */

define([
	'jquery',
	'backbone'
], function($, Backbone) {

	var BaseModel = Backbone.Model.extend({

		isEmptyString: function(str) {
			return str.trim() === '';
		},

		isNumeric: function(str) {
			return !isNaN(parseFloat(str)) && isFinite(str);
		},

		returnHTTPType: function(method) {
			var types = {
				"read": "GET",
				"create": "PUT"
			};
			return types[method];
		}
	});

	return BaseModel;

});