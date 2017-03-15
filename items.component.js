(function () {
  "use strict";
  // debugger;
  angular.module('data')
   .component('menuItems', {
     templateUrl: 'items.component.template.html',
     bindings: {
       items: '<',
       name: '<'
     }
   });


})()
