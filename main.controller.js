(function () {
  "use strict";
  angular.module('data')
  .controller('MainController', controller);

  controller.$inject=['MenuDataService','categories']
  function controller(service, categories) {
    var catCtrl = this;

    catCtrl.categories = categories;
    console.log('inside controller, categories are:', catCtrl.categories);
    // debugger;



  };
})()
