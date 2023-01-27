angular.module('myApp.blogService' ,[]);

angular.module('myApp.blogService')
    .factory('blogApis',($http)=>{

        const blog = {};

        blog.getBlogs = () => {
            return $http.get('https://jsonplaceholder.typicode.com/posts')
        }

        blog.getBlogData = (bid) => {
            return $http.get(`https://jsonplaceholder.typicode.com/posts/${bid}`)

        }

        blog.getUserData = (uid) => {
            return $http.get(`https://jsonplaceholder.typicode.com/users/${uid}`)

        }
        
    

    return blog;
});

