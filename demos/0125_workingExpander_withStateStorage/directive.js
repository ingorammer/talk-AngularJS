// extend predefined module
var mod = angular.module("demo");

mod.controller("myExpanderController", function ($scope, $window) {

   $scope.setExpanded = function (val) {
      $scope.expanded = val;

      if (val && $scope.storageKey) {
         $window.localStorage.setItem("EXPANDER_" + $scope.storageKey, "true");
      } else {
         $window.localStorage.removeItem("EXPANDER_" + $scope.storageKey);
      }
   };

   if ($scope.storageKey) {
      $scope.expanded = $window.localStorage.getItem("EXPANDER_" + $scope.storageKey);
   }

});

mod.directive("myExpander", function () {
   return {
      restrict: "AEC",
      scope: {
         title: "@", // take the title from HTML attribute
         storageKey: "@"
      },
      transclude: true,
      templateUrl: "myExpanderTemplate.html",
      controller: "myExpanderController"
   }
});
