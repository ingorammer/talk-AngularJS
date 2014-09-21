(function () {
   "use strict";

   function StatesService($rootScope, $q) {

      var stateDummyData = {states: [
         {name: "Test #1", area: 42},
         {name: "Test #2", area: 56}
      ]};

      this.getAllStates = function () {
         var def = $q.defer();

         window.setTimeout(function () {
            $rootScope.$apply(function () {
               def.resolve(stateDummyData);
               // def.reject("This is an error ...");
            });
         }, 1000);

         return def.promise;
      };

   }

   angular.module("demo").service("statesService", StatesService);
})();

