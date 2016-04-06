(function() {
    'use strict';

    angular
        .module('beaconGridApp')
        .factory('factoryTemplate', factoryTemplate); //regularCamelCase
        
    factoryTemplate.$inject = []; //inject dependencies here
        
    function factoryTemplate() {
        var service = {
            function1: function1
        };
        return service;
        
        function function1() {
            //do some logic
            //return something
        }
    }

})();