(function () {
  "use strict";

  angular.module('data')
   .component('menuItems', {
     templateUrl: '/templates/items.html',
     bindings: {
       items: '<'
     }
   });

})()
