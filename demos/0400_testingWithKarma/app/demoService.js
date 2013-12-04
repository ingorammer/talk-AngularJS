(function () {
   "use strict";

   window.$app = window.$app || {};

   $app.DemoService = function () {
      this.addNumbers = function (a, b) {
         return a + b;
      };
   };

   angular.module("demo").service("demoService", $app.DemoService);


})();
