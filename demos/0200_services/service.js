angular.module("test").factory("service1", function () {
   return {
      test: function () {
         alert("This is a method in service1");
      }
   }
});

angular.module("test").factory("service2", function (service1) {
   return {
      test: function () {
         alert("This is a method in service2");
         service1.test();
      }
   }
});

angular.module("test").service("service3", function Service3() {
   this.test = function () {
      alert("this is from service3");
   }
});

/* minification-support:

 If the following service is minified, it would not look as desired:

 angular.module("test").service("service4", function Service4(service1) {
 this.test = function () {
 alert("this is from service4.");
 service1.test();
 }
 });

 minified, this would look like this and will therefore not work:

 angular.module("test").service("service4",function(a){this.test=function(){alert("this is from service4."),a.test()}});

 */




// INSTEAD, we can use a different way to specify the service. The second parameter is an array
// in this case. The array lists the *names* of the services to be injected. The last element of
// the array is the function to call.

angular.module("test").service("service4", ["service1", function Service4(service1) {
   this.test = function () {
      alert("this is from service4.");
      service1.test();
   }
}]);

// When minified, this will turn into this. This version is called from the application

angular.module("test").service("service4",["service1",function(a){this.test=function(){alert("this is from service4 (minified)."),a.test()}}]);
