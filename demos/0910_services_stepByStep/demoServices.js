(function () {
   "use strict";

   var app = window.app || {};
   var demoModule = angular.module("demo");


   app.demoService1 = function (logService) {
      logService.write("In demoService1");

      this.method = function () {
         alert("foo2");
      }
   };

   demoModule.service("demoService1", app.demoService1);


})();


