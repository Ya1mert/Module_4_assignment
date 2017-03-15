(function () {
  "use strict";

  angular.module('data')
   .component('menuCategories', {
     templateUrl: './templates/categories.component.template.html',
     bindings: {
       categories: '<'
     }
   });

})()
