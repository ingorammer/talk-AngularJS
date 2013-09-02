var mod = angular.module("demo", []);

function DemoController($scope) {
   $scope.query = {name: ""};
   $scope.sort = {predicate: "name", reverse: false};

   // Source: https://www-genesis.destatis.de - 31.12.2011 - incl shared German/Luxemburg area of 6.2 km^2
   $scope.states = [
      {name: "Baden-Württemberg", area: 35751.41},
      {name: "Bayern", area: 70550.19},
      {name: "Berlin", area: 891.75},
      {name: "Brandenburg", area: 29483.98},
      {name: "Bremen", area: 419.24},
      {name: "Hamburg", area: 755.30},
      {name: "Hessen", area: 21114.76},
      {name: "Mecklenburg-Vorpommern", area: 23194.18},
      {name: "Niedersachsen", area: 47613.60},
      {name: "Nordrhein-Westfalen", area: 34097.72},
      {name: "Rheinland-Pfalz", area: 19854.13},
      {name: "Saarland", area: 2568.73},
      {name: "Sachsen", area: 18419.83},
      {name: "Sachsen-Anhalt", area: 20450.29},
      {name: "Schleswig-Holstein", area: 15799.57},
      {name: "Thüringen", area: 16172.50}
   ];

   $scope.doSomething = function (state) {

      alert("Selected state is '" + state.name + "'");

      // option #1: Changing some value
      //       state.name = "ABC";


      // option #2: Changing some value at a later time (doesn't work as expected!)
      /*
       window.setTimeout(function(){
       state.name = "AAA";
       }, 500);
       */


      // option #3: applying the delayed change
      /*window.setTimeout(function(){
       $scope.$apply(function(){
       state.name = "AAA";
       });
       }, 500);
       */
   }
}
