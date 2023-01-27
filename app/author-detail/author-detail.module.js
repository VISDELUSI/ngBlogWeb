'use strict';

angular.module('myApp.authorDetail', [
  'ngRoute'
]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/author-detail/:id',{
    templateUrl: 'author-detail/author-detail.template.html',
    controller: 'AuthorController'
  });
}]
).controller('AuthorController',['$routeParams','$scope','userApi', function AuthorController($routeParams , $scope , userApi){
  $scope.userId = $routeParams.id;
  userApi.getUser($scope.userId).then((response) => {

    $scope.authors = response.data;




  }).catch((err) => {console.log(err)});

  userApi.getBlogs($scope.userId).then((response)=>{

    $scope.userBlogs = response.data;
  }).catch((err)=>{console.log(err)});



}]);