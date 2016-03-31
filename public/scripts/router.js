(function() {
    "use strict";

    angular
        .module("myTodo")
        .config(["$urlRouterProvider",
            "$stateProvider",
            "$locationProvider",

            function($urlRouterProvider, $stateProvider, $locationProvider) {
                //Provide pretty urls with html5Mode
                $urlRouterProvider.otherwise("/");

                //Configure routes for myTodo app
                $stateProvider
                    .state('login', {
                        url: '/',
                        templateUrl: '../views/login.html',
                        controller: 'LoginCtrl as login'
                    })
                    .state('list', {
                        url: '/list',
                        templateUrl: '../views/list.html',
                        controller: 'ListCtrl as list'
                    })
            }]);

})();