(function () {
   "use strict";


   beforeEach(module('demo', function ($provide) {

      // Here, you could inject alternative implementations for mocking:

      // $provide.service("securityService", appMocks.FakeSecurityService);
   }));

   describe('demoService', function () {
      /**
       * @type {$app.DemoService}
       */
      var demoService;


      beforeEach(inject(function (_demoService_) {

         // we're using 'underscore aliasing' here
         demoService = _demoService_;


         // here, you could for example configure http mock responses

         // $httpBackend = _$httpBackend_;
         // $httpBackend.when("GET", "http://test.example.com/db/metadata").respond(JSON.stringify({some: "data"}));
      }));


      afterEach(function () {
         // ensure that httpBackend has completed

         // $httpBackend.verifyNoOutstandingExpectation();
         // $httpBackend.verifyNoOutstandingRequest();
      });

      it('does something else', inject(function () {

         var res = demoService.addNumbers(4, 5);
         expect(9).toBeJsonEqual(res);
      }));

      describe("addNumbers", function () {
         alert("TEST2")

         it('adds two numbers', inject(function () {

            var res = demoService.addNumbers(4, 5);
            expect(9).toBeJsonEqual(res);
         }));



         /*
          it('does something else', inject(function () {

          var res = demoService.addNumbers(4,5);

          // if we're using $httpBackend, we need to flush it here:
          $httpBackend.flush();

          expect(9).toBeJsonEqual(res);
          }));
          */
      });
   });
})();


