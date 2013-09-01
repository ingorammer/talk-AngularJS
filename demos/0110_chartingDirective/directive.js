// extend predefined module

angular.module("test").directive("myChart", function () {


   return {
      restrict: "EA",
      scope: {
         chartData: "&"
      },
      replace: true,
      template: "<canvas class='my-chart-wrapper' ></canvas>",
      link: function (scope, element, attrs) {

         if (attrs.width){
            element.attr("width", attrs.width);
         }

         if (attrs.height){
            element.attr("height", attrs.height);
         }

         scope.$watch(function () {
            var ctx = element[0].getContext("2d");
            var chartData = [];


            angular.forEach(scope.chartData(), function (item) {
               chartData.push({value:item.area, color:item.color});
            });

            var myNewChart = new Chart(ctx).Pie(chartData, {animation: false});
         });

      }
   }
})
;
