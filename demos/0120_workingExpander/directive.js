// extend predefined module
var mod = angular.module("test");

mod.directive("myExpander", function () {
   return {
      restrict: "AEC",
      scope: {
         title: "@" // take the title from HTML attribute
      },
      transclude: true,
      template: "<div class='my-expander-wrapper'><div class='my-expander-header'>{{title || 'Container/Wrapper!'}}&nbsp;&nbsp;&nbsp;<a class='my-expander-iconlink' ng-show='!expanded' ng-click='expanded = true'><span class='glyphicon glyphicon-collapse-down'></span><a class='my-expander-iconlink' ng-show='expanded' ng-click='expanded = false'><span class='glyphicon glyphicon-collapse-up'></span></div><div ng-show='expanded' class='my-expander-content' ng-transclude></div></div>"
   }
});
