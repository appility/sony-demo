/* jshint latedef: true, debug:true */
/* global define, console */
define([
	'jquery',
	'underscore',
	'backbone',
	'models/base'
], function($, _, Backbone, BaseModel){

	var sessionModel = Backbone.Model.extend({

		defaults: {
			id: 'session',
			sessionId: null,
			userId: null,
			expiryTime: null
		},

		initialize: function () {
			this.load();
			this.on('change', this.onAuthChange, this);
			this.on('change:userId', this.onUserIdChange, this);
		},

		load: function () {
			if ($.cookie(this.id)) {
				this.set(JSON.parse($.cookie(this.id)));
			}
		},

		save: function(attrs) {
			this.set(attrs);
            $.cookie(this.id, JSON.stringify(this.toJSON()));
        },

		onAuthChange: function () {
			Backbone.trigger('loginEvent');
		},

		amILoggedIn: function () {
			var myDate = new Date();
			var myEpochTime = myDate.getTime()/1000.0;
			return this.get('expiryTime') > myEpochTime;
		},

		logout: function () {
			$.removeCookie(this.id);
			this.clear();
		}

	});

	return sessionModel;

});