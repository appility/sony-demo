/* jshint latedef: true, debug:true */
/* global define, Appility */

define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var TitleView = Backbone.View.extend({

		template: Appility.Templates['title.html'],

		tagName: 'tr',

		attributes: function() {
			return {
				class: (this.model.collection.indexOf(this.model) % 2 === 0) ? 'pure-table-even' : 'pure-table-odd'
			};
		},

		events: {
			'click a.add': 'actionAddTitle',
			'click a.remove': 'actionRemoveTitle'
		},

		initialize: function(options) {
			this.options = options.options;
		},

		render: function() {
			var data = _.extend(this.options, this.model.toJSON());
			console.log(data);
			var templateResult = this.template(data);
			this.$el.html(templateResult);
			return this;
		},

		actionAddTitle: function(event) {
			event.preventDefault();
			Backbone.history.navigate('/signin', {
				trigger: true
			});
		},

		actionRemoveTitle: function(event) {
			event.preventDefault();
			Backbone.history.navigate('/signin', {
				trigger: true
			});
		}
	});

	return TitleView;

});