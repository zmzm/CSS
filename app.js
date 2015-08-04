(function () {
    'use strict';

    angular.module('myApp', [
        'ngRoute',
        'myApp.login',
        'myApp.home'
    ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
                .when('/home', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();