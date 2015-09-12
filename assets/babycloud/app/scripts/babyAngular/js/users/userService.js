(function() {
    'use strict';

    angular
        .module('userApp')
        .factory('userService', userService);

    function userService($http) {

        var API_URI = '/api/v1/baby';
        var service = {
            fetch: fetch,
            create: create,
            remove: remove,
            fetchOne: fetchOne,
            update:update
        };



        return service;

        ////////////

        function fetch() {
            return $http.get(API_URI);
        };

        function create(user) {
            return  $http.post(API_URI, user);
        };

        function remove(id) {
            return $http.delete(API_URI + '/' + id);
        };

        function fetchOne(id) {
            return $http.get(API_URI + '/' + id);
        };

        function update(user) {
            return $http.put(API_URI + '/', user);
        };



    }
})();
