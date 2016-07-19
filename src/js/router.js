/* jshint undef: true, unused: false, latedef: true */
/* global define, require, console */

define([
	'jquery',
	'underscore',
	'backbone',
	'views/app'
], function($, _, Backbone, App) {

	var Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'/': 'index',
			'titles': 'titles',
			'signin': 'signin',
			'profile': 'profile',
			'profile/titles': 'profileTitles',
			'register': 'register',
			'logout': 'logout'
		},

		route: function(route, name, callback) {
			var openRoutes = ['index', 'titles', 'signin', 'register'];
			var router = this;
			if (!callback) {
				callback = this[name];
			}
			var f = function() {
				var isLoggedIn = App.session.amILoggedIn();
				if (_.indexOf(openRoutes, name) > -1) {
					callback.apply(router, arguments);
					return;
				}
				if (!isLoggedIn) {
					Backbone.history.navigate('/logout', {
						trigger: true
					});
					return;
				} else {
					callback.apply(router, arguments);
				}
			};
			return Backbone.Router.prototype.route.call(this, route, name, f);
		},

		index: function() {
			var self = this;
			require(['views/home'], function(HomeView) {
				var view = new HomeView();
				self.renderView(view);
			});
		},

		titles: function() {
			var self = this;
			require(['views/titles', 'collections/titles'], function(TitlesView, TitlesCollection) {
				var titlesCollection = new TitlesCollection();
				var view = new TitlesView({
					collection: titlesCollection,
					addButton: true
				});
				view.collection.fetch({
					cache: true
				});
				self.renderView(view);
			});
		},

		profile: function() {
			var self = this;
			require(['views/profile', 'models/user'], function(ProfileView, UserModel) {
				var model = new UserModel();
				var view = new ProfileView({
					model: model
				});
				view.model.fetch({
					cache: true
				});
				self.renderView(view);
			});
		},

		profileTitles: function() {
			var self = this;
			require(['views/titles', 'collections/profile/titles'], function(TitlesView, TitlesCollection) {
				var titlesCollection = new TitlesCollection();
				var view = new TitlesView({
					collection: titlesCollection,
					removeButton: true
				});
				view.collection.fetch({
					cache: true
				});
				self.renderView(view);
			});
		},

		signin: function() {
			var self = this;
			require(['views/signin', 'models/signin'], function(SigninView, SigninModel) {
				var model = new SigninModel();
				var view = new SigninView({
					model: model
				});
				self.renderView(view);
			});
		},

		register: function() {
			var self = this;
			require(['views/register', 'models/register'], function(RegisterView, RegisterModel) {
				var registerModel = new RegisterModel();
				var view = new RegisterView({
					model: registerModel
				});
				self.renderView(view);
			});
		},

		logout: function() {
			App.session.logout();
			Backbone.history.navigate('/', {
				trigger: true
			});
		},

		renderView: function(view) {
			if (this._previousView) {
				this._previousView.close();
			}
			this._currentView = view;
			this._previousView = this._currentView;
			$('div#main-content').empty().append(view.render().el);
			return view;
		}
	});

	return Router;
});
