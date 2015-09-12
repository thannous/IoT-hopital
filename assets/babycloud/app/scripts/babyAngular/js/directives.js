(function() {
    'use strict';

        angular
        .module('userApp')
        .directive('gpButton', userDirective);

        function userDirective() {
            var directive = {
                template: '',
                restrict: 'E',
                replace : true,
                scope : {

                    user : "@",

                }
            };
            return directive;


        }
})();