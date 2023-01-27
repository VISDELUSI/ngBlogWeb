
angular.module('myApp.blogpost', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/blogpost/:id/:user', {
            templateUrl: 'blogpost/viewblog.html',
            controller: 'BlogCtrl'
        });
    }])

    .controller('BlogCtrl', ['$http', '$scope', '$routeParams', 'blogApis', 'userApi', 
    function BlogCtrl($http, $scope, $routeParams, blogApis ,userApi) {

        $scope.posts;
        $scope.bid = $routeParams.id;

        $scope.uid = $routeParams.user;

        blogApis.getBlogData($routeParams.id)
            .then((response) => {
                $scope.blogs = response.data;
                console.log(response.data.length);
            })
            .catch(err => console.log(err));

        userApi.getUser($scope.uid)
            .then((response) => {
                $scope.users = response.data;
                console.log(response.data.length);
            })
            .catch(err => console.log(err));

        $http.get(`https://jsonplaceholder.typicode.com/comments?postId=${$scope.bid}`)
            .then((response) => {
                $scope.comments = response.data;
                console.log(response.data.length);



            })
            .catch(err => console.log(err));







    }]);