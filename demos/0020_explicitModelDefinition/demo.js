var mod = angular.module("demo", []);

function DemoController($scope) {
   $scope.user = new UserModel("John", "F.", "Doe");
}

function UserModel(first, middle, last) {
   this.firstName = first;
   this.middle = middle;
   this.lastName = last;

   this.fullName = function () {
      return this.middle ? this.firstName + " " + this.middle + " " + this.lastName : this.firstName + " " + this.lastName;
   }

}

