angular.module("demo").factory("statesService", function ($rootScope, $q) {
   "use strict";

   var stateDummyData = {states: [
      {name: "Test #1", area: 42},
      {name: "Test #2", area: 56}
   ]};

   return {
      getAllStates: function () {
         var def = $q.defer();

         window.setTimeout(function () {
            $rootScope.$apply(function () {
               def.resolve(stateDummyData);
               // def.reject("This is an error ...");
            });
         }, 1000);

         return def.promise;
      }
   };

});