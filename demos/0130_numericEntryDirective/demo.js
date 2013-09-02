var mod = angular.module("test", []);

function DemoController($scope) {
   $scope.input = {};

   $scope.calculationResult = function(){
      if (!$scope.input.a || !$scope.input.b){
         return;
      }

      return Math.sqrt($scope.input.a * $scope.input.a + $scope.input.b * $scope.input.b);
   }
}

