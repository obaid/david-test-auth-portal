(function() {
    'use strict';

    angular
        .module('beaconGridAuthenticationApp')
        .controller('SignInController', SignInController);

    SignInController.$inject = []; //inject dependencies here

    function SignInController() {
        /* jshint validthis: true */
        var vm = this;

        vm.signIn = signIn;

        function signIn() {
            // factory  code to be added here
        }

    }

})();
