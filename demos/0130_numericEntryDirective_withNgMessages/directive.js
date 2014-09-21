// extend predefined module
angular.module("demo").directive('myFloat', function ($parse) {
   return {
      restrict: "A",
      require: "ngModel",
      link: function (scope, element, attr, ngModel) {
         var decimalPlaces = attr.decimalPlaces || 2;

         function fromUser(text) {
            if (!text) {
               ngModel.$setValidity("notANumber", true);
               return null;
            }

            var ret = Globalize.parseFloat(text);

            if (isNaN(ret) || ret === null) {
               ngModel.$setValidity("notANumber", false);
               return null;
            }

            ngModel.$setValidity("notANumber", true);

            return ret;
         }

         function toUser(text) {
            if (!text)
               return null;

            var out = Globalize.format(text, "n" + decimalPlaces);
            return out;
         }

         ngModel.$parsers.push(fromUser);
         ngModel.$formatters.push(toUser);
      }
   };
});