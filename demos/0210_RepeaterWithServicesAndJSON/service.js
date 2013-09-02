angular.module("demo").factory("statesService", function ($resource) {

   var states = $resource("states.json"); // could be parameterized like this: var User = $resource('/user/:userId', {userId:'@id'}); var user = User.get({userId:123} ...

   return {
      getAllStates: function () {
         return states.get();
      }
   }

});