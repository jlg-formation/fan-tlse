'use strict';

require('./layout/styles/layout.css');
require('angular/angular-csp.css');
var jQuery = require('jquery');
window.$ = jQuery;
window.jQuery = jQuery;

require('./layout/scripts/jquery.backtotop.js');
require('./layout/scripts/jquery.mobilemenu.js');
require('./layout/scripts/jquery.placeholder.min.js');

require('angular');
require('angular-ui-router');
require('./ors-route/ors-route.js');
require('./ors-star/ors-star.js');
require('spin.js/spin.js');
require('angular-spinner/dist/angular-spinner.js');

var app = angular.module('main', ['ors-route', 'ors-star', 'angularSpinner']);

app.run(function() {
	console.log('kiki');
});

app.directive('orsHeader', function() {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/ors-header.html',
	};
});

app.directive('orsBody', function() {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/ors-body.html',
	};
});

app.directive('orsFooter', function() {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/ors-footer.html',
	};
});
