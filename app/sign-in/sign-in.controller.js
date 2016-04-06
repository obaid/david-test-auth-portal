(function() {
  'use strict';

  angular
    .module('beaconGridApp')
    .controller('SignInController', SignInController);

  SignInController.$inject = ['authenticationFactory']; //inject dependencies here

  function SignInController(authenticationFactory) {
    /* jshint validthis: true */
    var vm = this;
    vm.email = '';
    vm.password = '';
    vm.processingLogin = false;
    vm.signIn = signIn;
    
    /* TODO - Make this promise get a otp - version 2.0
    authenticationFactory.isJwtValid().then(function(data) {
      console.log('promise success data: ');
      console.log(data);
    }, function(err) {
      vm.processingLogin = false;
      console.log('promise fail err: ');
      console.log(err);
    });
    */

    function signIn() {
      vm.processingLogin = true;
      authenticationFactory.signInUser(vm.email, vm.password);
    }

  }

})();
