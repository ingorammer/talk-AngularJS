var mod = angular.module("demo", []);

mod.controller("DemoController",
   /**
    * @param $scope
    * @param {StatesService} statesService
    * @constructor
    */
      function DemoController($scope, statesService) {
      $scope.query = {name: ""};
      $scope.sort = {predicate: "name", reverse: false};

      statesService.getAllStates().then(function (states) {
         $scope.data = states;
      });
   });

