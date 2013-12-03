var mod = angular.module("demo", []);

function DemoController($scope){

   $scope.user = {
      firstName: "John",
      lastName: "Doe",
      getFullName: function() {
         return "Fullname:" + this.firstName + " " + this.lastName;
      }
   };

   $scope.processData = function(){

      window.setTimeout(function(){
         $scope.$apply(function(){
            $scope.user.firstName  = "Max";
         });
      }, 1000);

   }

}