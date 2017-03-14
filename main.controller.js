(function () {
  "use strict";
  angular.module('data')
  .controller('MainController', controller);

  controller.$inject=['MenuDataService']
  function controller(service) {
    var ctrl = this;
    ctrl.result = [];

    ctrl.click = function () {
      console.log('ive clicked');
      service.getAllCategories().then(function (response) {
        console.log(response);
        ctrl.result = response.data;
        console.log("Result is: ",ctrl.result);
      });

    };




  };
})()
