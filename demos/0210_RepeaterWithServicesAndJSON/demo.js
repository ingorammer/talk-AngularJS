var mod = angular.module("demo", ["ngResource"]);

function DemoController($scope, statesService) {
   $scope.query = {name: ""};
   $scope.sort = {predicate: "name", reverse: false};

   $scope.data = statesService.getAllStates();
}

