// alternative declaration instead of just "function StateListController"

angular.module("demo").controller("StateListController", function ($scope, $location, $routeParams) {
   $scope.input = {filter: $routeParams.query};
   $scope.query = {name: $routeParams.query};
   $scope.sort = {predicate: "name", reverse: false};

   $scope.applyFilter = function () {
         $location.path("/states/" + ($scope.input.filter || ""));
   }
});