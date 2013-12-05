var mod = angular.module("demo", ["ngRoute"]).config(function ($routeProvider) {

   $routeProvider
      .when("/", { templateUrl: "Start.html" }) // we don't need a controller for this first one
      .when("/states/:query?", { templateUrl: "statelist.html", controller: "StateListController" })
      .when("/state/:id", { templateUrl: "state.html", controller: "StateController" })
      .otherwise({ redirectTo: "/" });

});




















// this is the root controller for the whole application. It defines the shared data in the parent scope
function DemoController($scope) {
   // Source: https://www-genesis.destatis.de - 31.12.2011 - incl shared German/Luxemburg area of 6.2 km^2
   $scope.states = [
      {id: 1, name: "Baden-Württemberg", area: 35751.41},
      {id: 2, name: "Bayern", area: 70550.19},
      {id: 3, name: "Berlin", area: 891.75},
      {id: 4, name: "Brandenburg", area: 29483.98},
      {id: 5, name: "Bremen", area: 419.24},
      {id: 6, name: "Hamburg", area: 755.30},
      {id: 7, name: "Hessen", area: 21114.76},
      {id: 8, name: "Mecklenburg-Vorpommern", area: 23194.18},
      {id: 9, name: "Niedersachsen", area: 47613.60},
      {id: 10, name: "Nordrhein-Westfalen", area: 34097.72},
      {id: 11, name: "Rheinland-Pfalz", area: 19854.13},
      {id: 12, name: "Saarland", area: 2568.73},
      {id: 13, name: "Sachsen", area: 18419.83},
      {id: 14, name: "Sachsen-Anhalt", area: 20450.29},
      {id: 15, name: "Schleswig-Holstein", area: 15799.57},
      {id: 16, name: "Thüringen", area: 16172.50}
   ];


}
