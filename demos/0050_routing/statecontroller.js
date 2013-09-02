
angular.module("demo").controller("StateController", function ($scope, $location, $routeParams) {
   angular.forEach($scope.states, function(state){
      if (state.id == $routeParams.id) {
         $scope.state = state;
      }
   });

});