angular.module("demo").directive('myDatepicker', function ($parse) {

   return {
      restrict: "EAC",
      replace: true,
      transclude: false,
      template:"<input type='text'>",
      link: function (scope, element, attrs) {
         var ngModel = $parse(attrs.ngModel); // ng-model="user.firstname.foo[0].bla"

         scope.$watch(ngModel, function (val) {
            var date = myHelpers.safeGetDate(val);
            element.datepicker("setDate", date);
         });

         var processChange = function () {
            var date = myHelpers.isoStringFromDate(element.datepicker("getDate"));

            scope.$apply(function (scope) {
               // Change bound variable
               ngModel.assign(scope, date);
               var newVal = myHelpers.safeGetDate(ngModel(scope));
               element.datepicker("setDate", newVal);
            });
         };

         element.datepicker({
            inline: true,
            dateFormat: 'dd.mm.yy',
            onClose: processChange,
            onSelect: processChange
         });

      }
   };
})
;
