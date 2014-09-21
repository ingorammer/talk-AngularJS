// extend predefined module
var mod = angular.module("demo");

// my-expander <-> myExpander

mod.directive("myExpander", function(){
      return {
         scope: {
            title: "@"
         },
         restrict: "EA",
         transclude: true,
         templateUrl: "myExpanderTemplate.html"
      }
});

