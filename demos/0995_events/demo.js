var mod = angular.module("demo", []);

function DemoController($scope) {
   $scope.items = [];
}

function ChildController1($scope, $rootScope) {
   $scope.params = {};
   $scope.items = [];

   $scope.send = function () {
      $rootScope.$broadcast("message", $scope.params.text);
   };

   $rootScope.$on("message", function (event, data) {
      $scope.items.push({text: data});
   });
}

function ChildController2($scope, $rootScope) {
   $scope.params = {};
   $scope.items = [];

   $scope.send = function () {
      $rootScope.$broadcast("message", $scope.params.text);
   };

   $scope.$on("message", function (event, data) {
      $scope.items.push({text: data});
   });

}
