(function () {
  'use strict';
  
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  
  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Andres";
    $scope.stateOfBeing ="hungry";

    $scope.sayMessage = function () {
      return 'Andres le gusta comer en la noche carne'
    };
    $scope.feedYaakov= function () {
      $scope.stateOfBeing ="fed";
    };
  }
  
  })();