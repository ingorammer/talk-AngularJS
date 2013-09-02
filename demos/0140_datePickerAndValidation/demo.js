var mod = angular.module("test", []);

function DemoController($scope) {
   $scope.continue = function () {
      alert("Continuing to next step ...")
   };

   $scope.cancel = function () {
      alert("Cancelling step ...")
   };
}

