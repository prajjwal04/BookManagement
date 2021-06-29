var app = angular.module('myApp', []);
var app = angular.module('shoppingApp',['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'index.html',
        controller : 'HomeController'
    })

    .when('/Book', {
        templateUrl : 'Book.html',
        controller : 'BookController'
    })

    .when('/About', {
        templateUrl : 'About.html',
        controller : 'AboutController'
    })

    .when('/Contact', {
        templateUrl : 'Contact.html',
        controller : 'ContactController'
    })

    .when('/Authors', {
        templateUrl : 'Authors.html',
        controller : 'AuthorsController'
    })

    .when('/PopularBooks', {
        templateUrl : 'PopularBooks.html',
        controller : 'PopularBooksController'
    })

    .otherwise({redirectTo: '/'});
});

app.controller('HomeController',function($scope){
    $scope.message= 'Hello from HomeController';
});

app.controller('BookController',function($scope){
    $scope.message= 'Hello from BookController';
});

app.controller('AboutController',function($scope){
    $scope.message= 'Hello from AboutController';
});

app.controller('ContactController',function($scope){
    $scope.message= 'Hello from ContactController';
});

app.controller('AuthorsController',function($scope){
    $scope.message= 'Hello from AuthorsController';
});

app.controller('PopularBooksController',function($scope){
    $scope.message= 'Hello from PopularBooksController';
});