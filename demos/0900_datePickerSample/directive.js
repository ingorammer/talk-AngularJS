// extend predefined module
var mod = angular.module("demo");

mod.directive("dateOfBirth", function () {
   return {
      restrict: "A",
      link: function (scope, element, attrs) {
         element.datepicker();
      }
   }
});
