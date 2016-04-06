(function() {
    'use strict';

    angular
        .module('beaconGridApp')
        .factory('apiMapFactory', apiMapFactory); //regularCamelCase
        
    apiMapFactory.$inject = []; //inject dependencies here
        
    function apiMapFactory() {
        var service = {
            getApis: getApis,
            apiStage: 'dev' //'dev', 'test' or 'prod'
        };
        return service;
        
        function getApis() {
            var stage = service.apiStage;
            var api = {};
            
            if (stage == 'dev') {
                api.loginUser = 'https://yp9jn2o057.execute-api.us-east-1.amazonaws.com/dev/loginuser'
            }
        }
    }

})();