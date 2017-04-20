(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function() {
		return {
			restrict: 'E',
			scope: {
				note: '=?' 
			},
			controller: function($scope, $element, $attrs, $compile) {
				'ngInject';
				console.log('orsStar template', arguments);
				$scope.$watch('note', function() {
					console.log('watch', arguments);
					var note = $scope.note || 3;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					var html = '';
					for (let i = 0; i < note; i++) {
						html += '<img ng-click="update(' + (i + 1) + ')" src="./ors-star/img/yellow_star.png"/>';
					}
					for (let i = note; i < 5; i++) {
						html += '<img ng-click="update(' + (i + 1) + ')" src="./ors-star/img/white_star.png"/>';
					}
					$element.html(html);
					$compile($element.contents())($scope);
				});
				$scope.update = function(n) {
					console.log('update', arguments);	
					$scope.note = n;
				};
			}
		};
	});
})();
