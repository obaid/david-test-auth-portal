(function() {
  'use strict';

  angular
    .module('beaconGridApp')
    .factory('authenticationFactory', authenticationFactory); //regularCamelCase

  authenticationFactory.$inject = ['$http','$q']; //inject dependencies here

  function authenticationFactory($http,$q) {
    var service = {
      isJwtValid: isJwtValid,
      signInUser: signInUser
    };
    return service;

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
        }
      }, function(err) {
        console.log(err);
      });
    }
  }

})();