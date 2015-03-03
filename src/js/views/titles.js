/* jshint latedef: true, debug:true */
/* global define, Appility */

define([
	'jquery',
	'underscore',
	'backbone',
	'views/app',
	'views/base',
	'views/title'
], function($, _, Backbone, App, BaseView, TitleView) {

	var TitlesView = BaseView.extend({

		tagName: 'table',

		template: Appility.Templates['titles.html'],

		className: 'pure-table',

		events: {
			'ajaxError': 'handleAjaxError',
			'ajaxSuccess': 'handleAjaxSuccess'
		},

		initialize: function(options) {
			this.options = options;
			this.listenTo(this.collection, 'sync', function(collection, errors) {
				this.render();
			}, this);
			BaseView.prototype.initialize.call(this);
		},

		render: function() {
			this.$el.html(this.template());
			if (!this.collection.length) {
				return this;
			}
			var frag = document.createDocumentFragment();
			_.each(this.collection.models, function(item, index) {
				var view = new TitleView({
					model: item,
					options: this.options
				});
				var elem = view.render().el;
				frag.appendChild(elem);
			}, this);
			this.$('.inner').append(frag);
			return this;
		}
	});

	return TitlesView;

});