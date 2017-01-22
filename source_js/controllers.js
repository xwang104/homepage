app.controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
}]);


app.controller('coursesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('./data/courses.json')
            .error(function(data) {
                console.log('There was an error', data);
            })
            .success(function(jsonData, statusCode) {
                console.log('The request was successful', statusCode);
                $scope.data = jsonData;
            });

}]);

app.controller('projectsCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('./data/projects.json')
            .error(function(data) {
                console.log('There was an error', data);
            })
            .success(function(jsonData, statusCode) {
                console.log('The request was successful', statusCode);
                $scope.data = jsonData;
            });
    //--------------------back to top----------------

    $("#top").click(function() {
        $('html, body').animate({scrollTop: 0 }, 0);
        return false;
    });

}]);