(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function() {
		return {
			restrict: 'E',
			template: function() {
				return '<img src="./ors-star/img/yellow_star.png"/>';
			}
		};
	});
})();
