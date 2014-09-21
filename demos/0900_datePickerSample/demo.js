var mod = angular.module("demo", []);

function DemoController($scope) {
   $scope.user = {
   };

   $scope.changeDate = function (){
      $scope.user.dateOfBirth = new Date();
   }
}

