(function () {
   "use strict";


   beforeEach(module('demo', function ($provide) {
      // Here, you could inject alternative implementations for mocking:
      // $provide.service("securityService", appMocks.FakeSecurityService);
      $provide.value("serviceBaseUrl", "http://test.example.com");
   }));

   describe('complexDemoService', function () {
      /**
       * @type {$app.ComplexDemoService}
       */
      var complexDemoService;
      var $httpBackend;
      var httpCallCount;
      var $timeout;

      beforeEach(inject(function (_complexDemoService_, _$httpBackend_, _$timeout_) {
         complexDemoService = _complexDemoService_;
         $httpBackend = _$httpBackend_;
         $timeout = _$timeout_;
         httpCallCount = 0;

         $httpBackend.when("GET", "http://test.example.com/customer/123").respond(JSON.stringify({customer: {name: "John Doe", "id": 123}}));
         $httpBackend.when("GET", "http://test.example.com/customer/456").respond(function () {
            httpCallCount++;
            // return: status, data, header
            return [200, JSON.stringify({customer: {name: "Jane Doe", "id": 456}}), {} ];
         });
      }));

      afterEach(function () {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
      });

      describe("getCustomer", function () {

         it('executes HTTP request and returns data', inject(function () {
            var cust;
            complexDemoService.getCustomer(123).then(function (customer) {
               cust = customer;
            });

            // the following now executes all queued requests
            $httpBackend.flush();

            expect(cust).toBeJsonEqual({"name": "John Doe", "id": 123});
         }));

         it('caches result for second request for same id', inject(function () {
            var cust;
            var cust2;
            complexDemoService.getCustomer(456).then(function (customer) {
               cust = customer;
            });

            // the following now executes all queued requests
            $httpBackend.flush();


            complexDemoService.getCustomer(456).then(function (customer) {
               cust2 = customer;
            });

            $timeout.flush();

            // we don't call $httpBackend.flush() here. An error (additional, unexpected http request)
            // would therefore be detected as an outstanding request in the
            // afterEach()-function (error would be "Unflushed requests: 1")

            expect(cust).toBeJsonEqual(cust2);
            expect(cust2).toBeJsonEqual({"name": "Jane Doe", "id": 456});
         }));

      });
   });
})();


