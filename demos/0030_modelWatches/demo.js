var mod = angular.module("demo", []);

function DemoController($scope) {
   $scope.user = new UserModel("John", "F.", "Doe");

   // note: only a performance-optimization if calculateFullName() is complex!

   $scope.$watch("user.firstName + user.middle + user.lastName", function(){
      $scope.user.calculateFullName();
   });
}

function UserModel(first, middle, last) {
   this.firstName = first;
   this.middle = middle;
   this.lastName = last;

   this.calculateFullName = function () {
      this.fullName = this.middle ? this.firstName + " " + this.middle + " " + this.lastName : this.firstName + " " + this.lastName;
   }
}

