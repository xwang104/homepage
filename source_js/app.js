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

app.factory('movieFactory', function movieFactory($http) {
	var exports = {};
	exports.getMovies = function() {
		return $http.get('./data/imdb250.json')
			.error(function(data) {
				console.log('There was an error', data);
			});
	};
	return exports;

});
