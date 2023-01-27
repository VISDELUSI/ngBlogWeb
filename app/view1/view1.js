'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['blogApis', '$scope', function View1Ctrl(blogApis, $scope){
      blogApis.getBlogs()
      .then((response) => {
        console.log(response.data.length);
        $scope.posts = response.data;

        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.numberOfPages = () => {
          return Math.ceil($scope.posts.length / $scope.pageSize);
        }
        console.log($scope.posts);

      })
      .catch(err => console.log(err));

    }]);


    angular.
  module('myApp.view1').
  filter('startFrom', () => {
    return (input, start) => {
      start = +start; //parse to int
      return input.slice(start);
    }
  });

// angular.module('myApp.view1',['ngRoute'])
//   .component('view1',{
//     templateUrl:'view1/view1.html',
//     controller:['$http', function View1Ctrl($http){

//       $http.get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         self.posts = response.data;
//       })
//       .catch(err => console.log(err));


//     } 
  
//   ]
//   });



