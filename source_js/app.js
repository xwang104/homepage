var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/list', {
			templateUrl: './partials/list.html',
			controller: 'listCtrl',
			controllerAs: 'list'
		})
		.when('/gallery', {
			templateUrl: './partials/gallery.html',
			controller: 'galleryCtrl',
			controllerAs: 'gallery'
		})
		.when('/details/:rank', {
			templateUrl: './partials/details.html',
			controller: 'detailsCtrl',
			controllerAs: 'details'
		})
		.otherwise({
			redirectTo: '/list'
		});
});
