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

		className: 'pure-table',

		events: {
			'ajaxError': 'handleAjaxError',
			'ajaxSuccess': 'handleAjaxSuccess'
		},

		initialize: function() {
			this.buttonAdd = false;
			this.buttonRemove = true;
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
					index: index,
					buttonAdd: this.buttonAdd,
					buttonRemove: this.buttonRemove
				});
				var elem = view.render().el;
				frag.appendChild(elem);
			}, this);
			this.$el.append(frag);
			return this;

		}
	});

	return TitlesView;

});