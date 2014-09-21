var mod = angular.module("demo", ["ngMessages"]);

mod.controller("DemoController", function DemoController($scope) {
   $scope.continue = function () {
      alert("Continuing to next step ...")
   };

   $scope.cancel = function () {
      alert("Cancelling step ...")
   };
});

