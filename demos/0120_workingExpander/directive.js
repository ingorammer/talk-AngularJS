// extend predefined module
var mod = angular.module("demo");

mod.directive("myExpander", function () {
   return {
      restrict: "AEC",
      scope: {
         title: "@" // take the title from HTML attribute
      },
      transclude: true,
      templateUrl: "myExpanderTemplate.html"
   }
});
