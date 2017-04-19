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
			templateUrl: './ors-route/tmpl/services.html'
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

})();
