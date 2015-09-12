(function() {
    'use strict';

    angular
        .module('babyApp')
        .controller('HomeController', homeController);


    homeController.$inject = ['$scope'];


    function homeController($scope) {
        $scope.name = "Thanh";
    }

})();
