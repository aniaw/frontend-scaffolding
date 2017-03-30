(function ()
{
    'use strict';
    function UsersController()
    {
        var ctrl = this;
        ctrl.message = 'Users';
    }

    angular.module('app').controller('UsersController', UsersController);

})();
