(function() {
    'use strict';

    angular
        .module('babyApp')
        .controller('babyController', babyController)
        .controller('viewBabyController', viewBabyController)
        .controller('editBabyController', editBabyController);


  babyController.$inject = ['$scope','babyService'];
  viewBabyController.$inject = ['$scope','$routeParams','babyService','$location'];
  editBabyController.$inject = ['$scope','$routeParams','babyService','$location'];
    function babyController($scope,babyService) {


        /*
         $scope.name = {};
         $scope.sendMessage = function() { };
         */


        var vm = this;

        vm.babies = {};
        vm.create = createUser;
        vm.delete = deleteUser



        init();



        ////////////


        function init() {
            return getUsers().then(function() {
                console.log("c'est bon j'ai les utilisateurs")
            });
        }

        function getUsers() {
            return babyService.fetch()
                .success(function(data) {
                console.log("************");
                console.log(data)
                vm.babies = data;
                console.log("************");
                    return vm.babies;
                });
        }

        function createUser(user) {
            console.log("create")
              babyService.create(user)
                .success(function(data) {

                    vm.babies = data;
              babyService.fetch()
                        .success(function(data) {
                            vm.babies = data;

                        });
                    $scope.user = {};
                });
        }

        function deleteUser(user) {
            var index = vm.babies.indexOf(user);
          babyService.remove(user.id)
                .success(function(data) {
                    vm.babies.splice(index, 1);

                });
        }


    }



    function viewBabyController($scope, $routeParams,babyService, $location) {


        /*
         $scope.name = {};
         $scope.sendMessage = function() { };
         */

        var id = $routeParams.id;
        var vm = this;
        vm.user = {};
        vm.delete = deleteUser;


        init();



        function init() {

            return getUser().then(function () {

                console.log("c'est bon j'ai un user")
            })
        }

        function getUser() {
            /**
             * Step 2
             * */
            return babyService.fetchOne(id)
                .success(function (data) {
                    /**
                     * Step 3
                     * */
                    vm.user = data;
                    return vm.user;
                });
        }

        function deleteUser(user) {

          babyService.remove(user.id)
                .success(function(data) {

                    $location.path('/babies');
                });
        }

    }




    function editBabyController($scope, $routeParams,babyService, $location) {


        /*
         $scope.name = {};
         $scope.sendMessage = function() { };
         */

        var id = $routeParams.id;
        var vm = this;
        vm.user = {};
        vm.edit =  editUser;



        init();



        function init() {

            return getUser().then(function () {

                console.log("c'est bon j'ai un user")
            })
        }

        function getUser() {
            /**
             * Step 2
             * */
            return babyService.fetchOne(id)
                .success(function (data) {
                    /**
                     * Step 3
                     * */
                    vm.user = data;
                    return vm.user;
                });
        }
        function editUser(data) {
            console.log("edit")
          babyService.update(data)
                .success(function () {
                    $location.path('/babies');
                });
        }


    }

})();


