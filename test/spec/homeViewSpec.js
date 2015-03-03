define(['views/base'], function(Base) {
	'use strict';

	var _baseView;

	beforeEach(function() {
		_baseView = new Base();
	});

	describe('base view', function() {
		it('should have a base view', function() {
			expect(1).toBe(1)
		});
	});

	describe('handeEmpty method', function() {
		it('should render correct html', function() {
			_baseView.handleEmpty();
			expect(_baseView.$el.html()).toBe('<p>No results.</p>')
		});
	});

});