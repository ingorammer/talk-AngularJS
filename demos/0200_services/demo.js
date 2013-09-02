var mod = angular.module("demo", []);

function DemoController($scope, service2, service4){
   $scope.demo = function() {
      service2.test();
   }

   $scope.demo2 = function() {
      service4.test();
   }
}