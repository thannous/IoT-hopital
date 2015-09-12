
angular.module('babyApp', [
    'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller : 'HomeController'
            })
            .when('/babies', {
                templateUrl: 'partials/list.html',
                controller : 'UserController',
                controllerAs: 'vm'
            })
            .when('/baby/:id', {
                templateUrl: 'partials/user.html',
                controller: 'viewUserController',
                controllerAs: 'vm'
            })
            .when('/baby/edit/:id', {
                templateUrl: 'partials/edit.html',
                controller: 'editUserController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
