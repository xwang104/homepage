/* Sample Controller */
app.controller('listCtrl', function($scope, movieFactory) {
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


    movieFactory.getMovies()
    	.success(function(jsonData, statusCode) {
    		console.log('The request was successful', statusCode);
    		$scope.data = jsonData;
    	});


});

app.controller('galleryCtrl', function($scope, movieFactory) {

	$scope.genres = ['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Western'];
	$scope.select = {selectGenre: ''};


    movieFactory.getMovies()
    	.success(function(jsonData, statusCode) {
    		console.log('The request was successful', statusCode);
    		$scope.data = jsonData;
    	});

});

app.controller('detailsCtrl', function($scope, movieFactory, $routeParams) {
	$scope.myRank = $routeParams.rank;
	$scope.preRank = parseInt($scope.myRank) - 1;
	$scope.nextRank = parseInt($scope.myRank) + 1;

    movieFactory.getMovies()
    	.success(function(jsonData, statusCode) {
    		console.log('The request was successful', statusCode);
    		$scope.data = jsonData;
		    for (var i = 0; i < $scope.data.length; i++) {
		    	if ($scope.data[i].rank == $scope.myRank) {
		    		$scope.movie = $scope.data[i];
		    		break;
		    	}
		    }

    	});


});




