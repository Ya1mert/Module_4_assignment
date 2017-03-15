(function () {
  "use strict";
  // debugger;
  angular.module('data')
   .component('menuItems', {
     templateUrl: 'templates/items.component.template.html',
     bindings: {
       items: '<',
       name: '<'
     }
   });


})()
