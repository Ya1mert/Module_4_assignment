(function () {
  "use strict";
  angular.module('data')

  .controller('ItemsController', itemsController);

  itemsController.$inject=['MenuDataService','itemData']

  function itemsController(service, itemData) {
    var iCtrl = this;
        
    iCtrl.shortList = itemData.menu_items;
    iCtrl.name = itemData.category.name;

    // console.log('this is shortList: ', iCtrl.shortList);



  };
})()
