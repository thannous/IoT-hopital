(function() {
    'use strict';

    angular
        .module('userApp')
        .controller('HomeController', homeController);


    homeController.$inject = ['$scope'];


    function homeController($scope) {
        $scope.name = "Thanh";
    }

})();