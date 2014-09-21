var mod = angular.module("demo", []);


mod.controller("DemoController",

   function DemoController($scope) {

      var name = "hallo";






      $scope.user = {
         vorname: "Hallo",
         name: "Welt"
      };

      $scope.isInvalid = function(){
         return $scope.user.vorname == "Ingo";
      };

      $scope.getFullName = function(){
         return $scope.user.vorname + " " + $scope.user.name;
      };

      $scope.test = function(){

         window.setTimeout(function(){
            $scope.$apply(function(){
               $scope.user.name = "Hallo Welt"
            });
         }, 1000);
      }


   });


/*

 Todo!

 - Bind the button
 - Bind the button-state (enable/disable)
 - Show $apply
 */