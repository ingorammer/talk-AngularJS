(function () {
   "use strict";

   window.customMatchers = {
      toBeJsonEqual: function () {
         return {
            compare: function (actual, expected) {
               var one = angular.toJson(actual),
                  two = angular.toJson(expected);

               return {
                  pass: one === two
               };
            }
         };
      }
   };

})();
