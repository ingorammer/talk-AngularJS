// extend predefined module
var mod = angular.module("demo");

mod.directive("myExpander", function() {
   return {
      restrict:"AEC",
      scope: {
         title: "@" // take the title from HTML attribute
      },
      transclude: true,
      template: "<div class='my-expander-wrapper'><div class='my-expander-header'>{{title || 'Container/Wrapper!'}} </div><div class='my-expander-content' ng-transclude></div></div>"
   }
});
