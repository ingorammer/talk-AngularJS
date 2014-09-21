(function () {
   "use strict";

   var app = window.app || {};
   var sharedServicesModule = angular.module("sharedServices", []);

   /**
    * @param $rootScope
    * @constructor
    */
   app.LogService = function ($rootScope) {
      $rootScope.messages = [];

      this.write = function (text) {
         $rootScope.messages.push({text: text});
      };

      this.write("Initialized logService");

   };

   sharedServicesModule.service("logService", app.LogService);
})();


