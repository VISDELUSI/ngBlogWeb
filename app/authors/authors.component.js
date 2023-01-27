'use strict';

angular.
  module('authors').
  component('authors', {
    templateUrl: 'authors/authors.template.html',
    controller: ['$http', function AuthorsController($http) {
      var self = this;
      self.orderProp = 'id';
      $http.get('https://jsonplaceholder.typicode.com/users/').then(function (response) {
        console.log(response.data.length);
        console.log(response);
        self.authors = response.data;
      });
    }]
  });
