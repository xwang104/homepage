var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: './partials/home.html',
		})
		.when('/courses', {
			templateUrl: './partials/courses.html',
			controller: 'coursesCtrl',
			controllerAs: 'courses'
		})
		.when('/projects', {
			templateUrl: './partials/projects.html',
			controller: 'projectsCtrl',
			controllerAs: 'projects'
		})
		.when('/more', {
			templateUrl: './partials/more.html',
		})
		.otherwise({
			redirectTo: '/home'
		});
});

