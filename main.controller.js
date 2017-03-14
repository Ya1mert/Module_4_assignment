(function () {
  "use strict";
  angular.module('data')
  .controller('MainController', controller);

  controller.$inject=['service']
  function controller(service) {
    var ctrl = this;

    ctrl.click = function () {
      var result=service.getAllCategories();
      console.log(result)
    }


  };
})()
