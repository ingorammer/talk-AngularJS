var mod = angular.module("demo", []);

mod.controller("DemoController", function DemoController($scope) {
   $scope.items = [];
});

mod.controller("ChildController1", function ChildController1($scope, $rootScope) {
   $scope.params = {};
   $scope.items = [];

   $scope.send = function () {
      $rootScope.$broadcast("message", $scope.params.text);
   };

   $rootScope.$on("message", function (event, data) {
      $scope.items.push({text: data});
   });
});

mod.controller("ChildController2", function ChildController2($scope, $rootScope) {
   $scope.params = {};
   $scope.items = [];

   $scope.send = function () {
      $rootScope.$broadcast("message", $scope.params.text);
   };

   $scope.$on("message", function (event, data) {
      $scope.items.push({text: data});
   });

});
