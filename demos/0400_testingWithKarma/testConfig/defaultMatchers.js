(function () {
   "use strict";

   beforeEach(function () {
      var matchers = {
         toBeJsonEqual: function (expected) {
            var one = JSON.stringify(this.actual),
               two = JSON.stringify(expected);

            return one === two;
         }
      };
      this.addMatchers(matchers);
   });


})();
