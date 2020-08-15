(function () {
    'use strict';
    
    angular.module('DIApp', [])
    .controller('DIController', DIController);

    DIController.$inject= ['$scope', '$filter'];
    
    function DIController ($scope, $filter) {
      $scope.name = "Yaakov";

      $scope.upper = function() {
          var upperCase = $filter('uppercase');
          $scope.name= upperCase($scope.name)
      };
    }
    
    })();