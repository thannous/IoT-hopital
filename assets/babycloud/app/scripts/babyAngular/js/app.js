
angular.module('babyApp', [
    'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/scripts/babyAngular/partials/babyPanel.html',
                controller : 'babyController',
                controllerAs: 'vm'
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
