angular.module('myApp.userService' ,[]);

angular.module('myApp.userService')
    .factory('userApi',($http)=>{

        const user = {};

        user.getUser = (uid) => {

            return $http.get(`https://jsonplaceholder.typicode.com/users/${uid}`)

        }

        user.getBlogs = (uid) => {
            return $http.get(`https://jsonplaceholder.typicode.com/users/${uid}/posts`)
        }
    

    return user;
});

