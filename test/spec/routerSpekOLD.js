define(['router'], function(Router) {
	'use strict';

	if (document.location.protocol === 'file:') {
		return;
	}

	var trigger = {
		trigger: true
	};
	var _router;

	beforeEach(function() {
		Backbone.history.stop(); //stop the router
		spyOn(Router.prototype, 'route');
		spyOn(Router.prototype, 'index'); //spy on our routes, and they won't get called
		spyOn(Router.prototype, 'titles');
		spyOn(Router.prototype, 'signin');
		spyOn(Router.prototype, 'profile');
		spyOn(Router.prototype, 'profileTitles');
		spyOn(Router.prototype, 'register');
		spyOn(Router.prototype, 'logout');

		_router = new Router();
		Backbone.history.start({
			root: '',
			pushState: 'pushState' in window.history
		});
	});

	describe('router', function() {

		it('should have routes defined', function() {
			//expect(_router.prototype.routes).toBeDefined()
		});

		it('"/titles" route routes to titles', function() {
			Backbone.history.navigate('titles');
			expect(Router.prototype.route).toHaveBeenCalled();
		});
	});

});