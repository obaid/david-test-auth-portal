(function() {
    'use strict';

    angular
        .module('beaconGridApp')
        .factory('davidTestFactory', davidTestFactory); //regularCamelCase
        
    davidTestFactory.$inject = ['$http']; //inject dependencies here
        
    function davidTestFactory($http) {
        var service = {
            authenticate: authenticate,
            forgotPassPromise: forgotPassPromise,
            verifyJwt: verifyJwt
        };
        return service;
        
        function authenticate() {
            var url = 'https://yp9jn2o057.execute-api.us-east-1.amazonaws.com/dev/authenticateuser';
            var data = {
                email: "david.sheffield@colonybank.com",
                password: "UJ_tW9cKbh"
            };
            var urlPromise = $http.post(url, data);
            return urlPromise;
        }
        
        function forgotPassPromise(data) {
            var url = 'https://yp9jn2o057.execute-api.us-east-1.amazonaws.com/dev/forgotpassword';
            var urlPromise = $http.post(url, data);
            return urlPromise;
        }
        
        function verifyJwt(jwt) {
            var url = 'https://yp9jn2o057.execute-api.us-east-1.amazonaws.com/dev/verifytoken';
            var data = {
                jwt: jwt
            };
            var urlPromise = $http.post(url, data);
            return urlPromise;
        }
    }

})();