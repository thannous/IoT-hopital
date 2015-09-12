(function() {
    'use strict';

    angular
        .module('userApp')
        .controller('UserController', userController)
        .controller('viewUserController', viewUserController)
        .controller('editUserController', editUserController);


    userController.$inject = ['$scope','userService'];
    viewUserController.$inject = ['$scope','$routeParams','userService','$location'];
    editUserController.$inject = ['$scope','$routeParams','userService','$location'];
    function userController($scope,userService) {


        /*
         $scope.name = {};
         $scope.sendMessage = function() { };
         */


        var vm = this;

        vm.users = {};
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
            return userService.fetch()
                .success(function(data) {
                    vm.users = data;
                    return vm.users;
                });
        }

        function createUser(user) {
            console.log("create")
            userService.create(user)
                .success(function(data) {

                    vm.users = data;
                    userService.fetch()
                        .success(function(data) {
                            vm.users = data;

                        });
                    $scope.user = {};
                });
        }

        function deleteUser(user) {
            var index = vm.users.indexOf(user);
            userService.remove(user.id)
                .success(function(data) {
                    vm.users.splice(index, 1);

                });
        }


    }



    function viewUserController($scope, $routeParams,userService, $location) {


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
            return userService.fetchOne(id)
                .success(function (data) {
                    /**
                     * Step 3
                     * */
                    vm.user = data;
                    return vm.user;
                });
        }

        function deleteUser(user) {

            userService.remove(user.id)
                .success(function(data) {

                    $location.path('/users');
                });
        }

    }




    function editUserController($scope, $routeParams,userService, $location) {


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
            return userService.fetchOne(id)
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
            userService.update(data)
                .success(function () {
                    $location.path('/users');
                });
        }


    }

})();


