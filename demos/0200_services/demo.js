var mod = angular.module("demo", []);

/**
 * @param $scope
 * @param service3
 * @param service4
 * @constructor
 */
mod.controller("DemoController", function DemoController($scope, service3, service4) {
   $scope.demo = function () {
      service3.test();
   };

   $scope.demo2 = function () {
      service4.test();
   };
});