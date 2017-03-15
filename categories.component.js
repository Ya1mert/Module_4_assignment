(function () {
  "use strict";

  angular.module('data')
   .component('menuCategories', {
     templateUrl: 'categories.component.template.html',
     bindings: {
       categories: '<'
     }
   });

})()
