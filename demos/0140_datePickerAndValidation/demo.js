var mod = angular.module("demo", []);

function DemoController($scope) {
   $scope.continue = function () {
      alert("Continuing to next step ...")
   };

   $scope.cancel = function () {
      alert("Cancelling step ...")
   };
}

