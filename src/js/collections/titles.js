define([
	'jquery',
	'backbone',
	'models/title'
], function($, Backbone, TitleModel) {
	
	var TitleCollection = Backbone.Collection.extend({

		model: TitleModel,

		url: '/api/gametitles/list',

		sync: function(method, model, options) {
			var optionsExtended = _.extend({
				cache: true
			}, options);
			return Backbone.sync(method, model, optionsExtended);
		},

		parse: function(response) {
			return response.titles;
		}
	});

	return TitleCollection;
});