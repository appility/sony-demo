/* jshint latedef: true, debug:true */
/* global define */

define([
	'jquery',
	'underscore',
	'backbone',
	'models/base'
], function($, _, Backbone, BaseModel) {

	var TitleModel = BaseModel.extend({

		initialize: function() {
			BaseModel.prototype.initialize.call(this);
		}

	});

	return TitleModel;

});