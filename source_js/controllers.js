/* Sample Controller */
app.controller('listCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.searchInput = '';
	$scope.sortBys = [
		{
			id: 1,
			title: 'Title',
			key: 'title',
		},
		{
			id: 2,
			title: 'Rank',
			key: 'rank',
		}
		];
	$scope.sortBy = $scope.sortBys[0];
    $scope.reverse = false;

	$http.get('./data/imdb250.json').
	  success(function(data, status) {
	  	$scope.status = status;
	  	$scope.data = data;
	  }).
	  error(function(data, status) {
	  	$scope.data = data || "Request failed";
	  	$scope.status = status;
	  });
}]);