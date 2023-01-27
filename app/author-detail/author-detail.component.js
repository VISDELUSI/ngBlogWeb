// 'use strict';

// angular.
//   module('authorDetail').
//   component('authorDetail', {
//     templateUrl: 'author-detail/author-detail.template.html',
//     controller: ['$routeParams', '$http',
//       function AuthorDetailController($routeParams, $http) {
//         var self = this;
//         self.userId = $routeParams.id;
//         // $scope.userId = $routeParams.id;
//         $http.get(`https://jsonplaceholder.typicode.com/users/${self.userId}`)
//           .then((response) => {
//             console.log(response);
//             self.authors = response.data;
//             // self.blog = response.data;
//             // self.dummyArray = response.data.body.split(' ');
//             console.log(self.authors);
//           })
//           .catch(err => alert(`This blog not found!`));
//       }
//     ]
//   });


