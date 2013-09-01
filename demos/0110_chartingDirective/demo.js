var mod = angular.module("test", []);

function DemoController($scope) {
   $scope.query = {name: ""};
   $scope.sort = {predicate: "area", reverse: true};

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

   var cols = ["#D5EB85",
      "#DFB9DA",
      "#8ADDBF",
      "#F5A590",
      "#A3D1E6",
      "#E6C385",
      "#BFD0A9",
      "#A9E59F",
      "#DCCECF",
      "#B1BE75",
      "#E0ACAC",
      "#BADCD1",
      "#E1C3A4",
      "#DFCC70",
      "#E0E9A9",
      "#E3AB68"];

   angular.forEach($scope.states, function (item, idx) {
      item.color = cols[idx];
   });

}
