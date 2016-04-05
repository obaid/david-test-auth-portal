(function() {
  'use strict';

  angular
    .module('beaconGridAuthenticationApp')
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
      when('/chris-test', {
        templateUrl: 'app/test/chris-test.html',
        controller: 'ChrisTestController',
        controllerAs: 'vm'
      }).
      when('/david-test', {
        templateUrl: 'app/test/david-test.html',
        controller: 'DavidTestController',
        controllerAs: 'vm'
      }).
      when('/emmanuel-test', {
        templateUrl: 'app/test/emmanuel-test.html',
        controller: 'EmmanuelTestController',
        controllerAs: 'vm'
      }).
      otherwise({
        redirectTo: '/sign-in'
      });
  }
})();
