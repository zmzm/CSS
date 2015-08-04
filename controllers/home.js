(function () {
    'use strict';

    angular.module('myApp.home', ['ngRoute'])
        .controller('HomeController',['$rootScope',

        function ($rootScope) {
            var vm = this;
            vm.username = $rootScope.username;
            console.log(vm.username);
        }]);

})();