(function() {
  'use strict';

  angular
    .module('beaconGridApp')
    .config(appConfig);


  function appConfig($routeProvider) {
    $routeProvider.
      when('/forgot-pass', {
        templateUrl: 'app/forgot-pass/forgot-pass.html',
        controller: 'ForgotPassController',
        controllerAs: 'vm'
      }).
      when('/sign-in', {
        templateUrl: 'app/sign-in/sign-in.html',
        controller: 'SignInController',
        controllerAs: 'vm'
      }).
      when('/reset-pass', {
        templateUrl: 'app/reset-pass/reset-pass.html',
        controller: 'ResetPassController',
        controllerAs: 'vm'
      }).
      otherwise({
        redirectTo: '/sign-in'
      });
  }
})();
