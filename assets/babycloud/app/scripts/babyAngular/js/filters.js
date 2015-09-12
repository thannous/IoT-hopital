"use strict";

angular
    .module('userApp').filter('unFiltre', function () {
        return function(paramFiltre) {
           return paramFiltre
        };
    });