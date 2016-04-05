(function() {
  'use strict';

  angular
    .module('beaconGridApp')
    .controller('DavidTestController', DavidTestController); //UpperCamelCase

  DavidTestController.$inject = ['davidTestFactory']; //inject dependencies here

  function DavidTestController(davidTestFactory) {
    /* jshint validthis: true */
    var vm = this;
    vm.authenticate = authenticate;
    vm.forgotPass = forgotPass;
    vm.forgotPassEmail = 'cairey@beacongrid.com'
    vm.isJwtValid = false;
    vm.jwt = '';
    vm.verifyJwt = verifyJwt;

    function authenticate() {
      davidTestFactory.authenticate().then(function(data) {
        console.log(data);
        vm.jwt = data.data.jwt;
      }, function() {
        console.log('error');
      });
    }

    function forgotPass(email) {
      var dataToPass = {email: email};
      davidTestFactory.forgotPassPromise(dataToPass).then(function(data) {
        console.log(data);
      }, function() {
        console.log('error');
      });
    }

    function verifyJwt(jwt) {
      davidTestFactory.verifyJwt(jwt).then(function(data) {
        //console.log(data.data);
        vm.isJwtValid = data.data.valid;
      }, function() {
        console.log('error');
      });
    }

  }

})();