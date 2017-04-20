(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function() {
		return {
			restrict: 'E',
			scope: {
				note: '='
			},
			controller: function($scope, $element, $attrs) {
				'ngInject';
				console.log('orsStar template', arguments);
				$scope.$watch('note', function() {
					console.log('watch', arguments);
					var note = $scope.note || 3;
					var html = '';
					for (var i = 0; i < note; i++) {
						html += '<img src="./ors-star/img/yellow_star.png"/>';
					}
					for (var i = note; i < 5; i++) {
						html += '<img src="./ors-star/img/white_star.png"/>';
					}
					$element.html(html);
				});
			}
		};
	});
})();
