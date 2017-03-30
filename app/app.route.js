(function ()
{
    'use strict';

    function config($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: 'modules/start/start.tpl.html',
            controller: 'StartController',
            controllerAs: 'startCtrl'
        });
        $routeProvider.when('/users', {
            templateUrl: 'modules/users/users.tpl.html',
            controller: 'UsersController',
            controllerAs: 'usersCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }

    angular.module('app').config(config);

})();
