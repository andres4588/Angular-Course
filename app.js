(function () {
'use strict';

angular.module('myFirstapp', [])

.controller('myFirstController', function($scope) {
    $scope.name= "Andres";
    $scope.sayHello = function() {
        return "hello Coursera";
    };
});

})();