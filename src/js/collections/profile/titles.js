define([
	'jquery',
	'backbone',
	'views/app',
	'collections/titles'
	], function( $, Backbone, App, BaseCollection ) {
	var TitleCollection = BaseCollection.extend({

		url: function() {
			return '/api/profile/' + App.session.get('userId') + '/titles';
		},

		initialize: function() {
			BaseCollection.prototype.initialize.call(this);
		},

		sync: function(method, model, options) {
			var optionsExtended = _.extend({
				headers: {
			        "sessionId": App.session.get('sessionId')
			    },
				cache: true
			}, options);
			return Backbone.sync(method, model, optionsExtended);
		}
	});

	return TitleCollection;
});