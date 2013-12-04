(function () {
   "use strict";

   window.$app = window.$app || {};

   $app.ComplexDemoService = function ($http, serviceBaseUrl, $cacheFactory, $q, $timeout) {
      var cache = $cacheFactory("complexDemoServiceCache");

      this.getCustomer = function (id) {
         var cached = cache.get(id);
         if (cached) {
            var defer = $q.defer();
            $timeout(function () {
               defer.resolve(cached);
            }, 0);
            return defer.promise;
         } else {
            return $http.get(serviceBaseUrl + "/customer/" + id).then(function (response) {
               cache.put(id, response.data.customer);
               return response.data.customer;
            });
         }

      };
   };

   angular.module("demo").service("complexDemoService", $app.ComplexDemoService);

})();
