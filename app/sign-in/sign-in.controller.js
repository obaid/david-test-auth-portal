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
    vm.signIn = signIn;

    console.log(authenticationFactory.isJwtValid());
    
    authenticationFactory.isJwtValid().then(function(data) {
      console.log('promise success data: ');
      console.log(data);
    }, function(err) {
      console.log('promise fail err: ');
      console.log(err);
    });

    function signIn() {
      authenticationFactory.signInUser(vm.email, vm.password);
    }

  }

})();
