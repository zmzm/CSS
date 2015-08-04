(function () {
    'use strict';

    angular.module('myApp.login', ['ngRoute'])
        .controller('LoginController',['$location','$rootScope',

    function ($location, $rootScope) {
        var vm = this;
        vm.login = function(){
            $rootScope.username = vm.username;
            $rootScope.password = vm.password;
            $location.path('/home');
        };
    }]);

})();