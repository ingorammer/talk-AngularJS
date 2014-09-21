(function () {
   "use strict";

   var mod = angular.module("demo", ["sharedServices"]);

   /**
    * @param $scope
    * @param {app.LogService} logService
    * @param {app.demoService1} demoService1
    * @constructor
    */
   function Controller ($scope, logService, demoService1) {

      $scope.demo = function () {
         logService.write("Starting ...");
      }
   }

   mod.controller("DemoController", Controller);

})();

// --------


var demo2Module = angular.module("demo2", ["sharedServices"]);

demo2Module.controller("DemoController", function ($scope, logService, demoService1) {

   $scope.demo = function () {
      logService.write("Starting ... (demo 2 - DemoController)");
   }
});