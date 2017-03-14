(function () {
  "use strict";

  angular.module('data')
   .component('menuCategories', {
     templateUrl: '/templates/categories.html',
     bindings: {
       result: '<'
     }
   });

})()
