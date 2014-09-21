var mod = angular.module("demo", []);

mod.controller("DemoController",

   function DemoController($scope) {
      $scope.user = {};
   });


/*

 Todo!

 - Bind the button
 - Bind the button-state (enable/disable)
 - Show $apply
 */