(function () {
   "use strict";

   /**
    * @constructor
    */
   function StatesService($http) {
      this.getAllStates = function () {
         return $http.get("states.json").then(function (response) {
            return response.data.states;
         });
      };
   }

   angular.module("demo").service("statesService", StatesService);

})();

