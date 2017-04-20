(function() {
	'use strict';

	var app = angular.module('ors-route', ['ui.router']);

	app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		'ngInject';
		var homeState = {
			name: 'home',
			url: '/',
			templateUrl: './ors-route/tmpl/home.html'
		};

		var produitsState = {
			name: 'produits',
			url: '/produits',
			templateUrl: './ors-route/tmpl/produits.html'
		};
		var sevicesState = {
			name: 'services',
			url: '/services',
			templateUrl: './ors-route/tmpl/services.html',
			controller: 'ServicesCtrl',
			controllerAs: '$ctrl'
		};
		var clientsState = {
			name: 'clients',
			url: '/clients',
			templateUrl: './ors-route/tmpl/clients.html'
		};
		var contactState = {
			name: 'contact',
			url: '/contact',
			templateUrl: './ors-route/tmpl/contact.html'
		};


		$stateProvider.state(homeState);
		$stateProvider.state(produitsState);
		$stateProvider.state(sevicesState);
		$stateProvider.state(clientsState);
		$stateProvider.state(contactState);

		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	});

	app.controller('ServicesCtrl', function ServicesCtrl($http, $q, $rootScope) {
		'ngInject';
		console.log('ServicesCtrl', arguments);
		var ctrl = this;
		ctrl.start = function() {
			console.log('start', arguments);
			$rootScope.showSpinner = true;
			$http.get('../ws/s1').then(function(response) {
				console.log('response 1', response);
				return $q.all([
					$http.get('../ws/s2'),
					$http.get('../ws/s3'),
					$http.get('../ws/s4').then(function(response) {
						console.log('response 4', response);
						return $http.get('../ws/s5');
					})
				]);
			}).then(function(responses) {
				console.log('responses 2, 3, (4, 5)', responses);
				return $http.get('../ws/s6');
			}).then(function(response) {
				console.log('response 6', response);
			}).finally(function() {
				$rootScope.showSpinner = false;
			}).catch(function(error) {
				console.error('error', error);
			});
		};
	});
})();
