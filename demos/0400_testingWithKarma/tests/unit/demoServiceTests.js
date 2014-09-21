(function () {
   "use strict";

   describe('demoService', function () {
      /**
       * @type {$app.DemoService}
       */
      var demoService;

      beforeEach(inject(function (_demoService_) {
         // we're using 'underscore aliasing' here
         demoService = _demoService_;
      }));

      describe("addNumbers", function () {

         it('adds two numbers', inject(function () {

            var res = demoService.addNumbers(4, 5);
            expect(res).toBe(9);
         }));
      });
   });
})();


