'use strict';

angular.module('myApp.authors', [
  'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/authors', {
            templateUrl: 'authors/authors.html',
            controller: 'AuthCtrl'
        });
    }])
.controller('AuthCtrl',['$http','$scope', function AuthCtrl($http , $scope){

  $scope.orderProp = 'id';
  
  $http.get('https://jsonplaceholder.typicode.com/users/').then(function (response) {
    console.log(response.data.length);
    console.log(response);
    $scope.authors = response.data;
  });

}]);