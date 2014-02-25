var mod = angular.module("demo", []);

function DemoController($scope) {

   $scope.user = {
      firstName: "John",
      lastName: "Doe"
   };
}


/*

Todo!

 - Bind the button
 - Bind the button-state (enable/disable)
 - Show $apply
 */