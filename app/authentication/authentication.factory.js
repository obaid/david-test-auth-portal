(function() {
  'use strict';

  angular
    .module('beaconGridApp')
    .factory('authenticationFactory', authenticationFactory); //regularCamelCase

  authenticationFactory.$inject = ['$http','$location','$q','$window']; //inject dependencies here

  function authenticationFactory($http,$location,$q,$window) {
    var service = {
      generateReturnUrl: generateReturnUrl,
      isJwtValid: isJwtValid,
      signInUser: signInUser
    };
    return service;
    
    function generateReturnUrl(otp) {
      var qs = $location.search();
      console.log(qs);
      var returnUrl = encodeURIComponent(qs.returnUrl);
      var url = qs.processSignInUrl + '?returnUrl=' + returnUrl;
      url += '&otp=' + otp;
      $window.location.href = url;
    }

    function isJwtValid() {
      var deferred = $q.defer();
      var localJwt = localStorage.getItem("jwt")
      if (localJwt === null) {
        deferred.reject('jwt is not valid');
      } else {
        //
      }
      
      return deferred.promise;
    }
    
    function signInUser(email, pass) {
      var url = 'https://yp9jn2o057.execute-api.us-east-1.amazonaws.com/dev/authenticateuser';
      var data = {
          email: email,
          password: pass
      };
      $http.post(url, data).then(function(data) {
        if (data.data.success === false) {
          alert('username or password failed, please try again');
        } else {
          console.log('we did get logged in');
          console.log(data.data);
          localStorage.setItem("jwt", data.data.jwt)
          localStorage.setItem("groups", data.data.groups)
          service.generateReturnUrl(data.data.otp);
        }
      }, function(err) {
        console.log(err);
      });
    }
  }

})();