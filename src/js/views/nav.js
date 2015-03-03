/* jshint undef: false, unused: false, latedef: true, debug: true*/
/* global define, _, alert  */

define([
	'jquery',
	'underscore',
	'backbone',
	'views/app'
], function($, _, Backbone, App) {

	'use strict';

	var NavView = Backbone.View.extend({

		template: Appility.Templates['nav.html'],

		events: {
			'click li:not(".pure-menu-selected") a': 'changeView',
			'click li.pure-menu-selected a': function(event) {
				event.preventDefault();
			}
		},

		initialize: function(options) {
			this.listenTo(Backbone, 'loginEvent', function() {
				this.render();
			}, this);
		},

		render: function() {
			var authStatus = App.session.amILoggedIn();
			var templateResult = this.template({
				authStatus: authStatus
			});
			this.$el.html(templateResult);
			return this;
		},

		changeView: function(event) {
			event.preventDefault();
			var currentTarget = $(event.currentTarget);
			var confirm = true;
			this.$('a').parent().removeClass('pure-menu-selected');
			currentTarget.parent().addClass('pure-menu-selected');
			if (currentTarget[0].pathname === 'logout') {
				var result = confirm("Are you sure?");
				if (confirm) {
					Backbone.history.navigate(currentTarget[0].pathname, {
						trigger: true
					});
				}
			} else {
				Backbone.history.navigate(currentTarget[0].pathname, {
					trigger: true
				});
			}
		}
	});

	return NavView;

});