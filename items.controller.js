(function () {
  "use strict";
  angular.module('data')

  .controller('ItemsController', itemsController);

  itemsController.$inject=['MenuDataService','categories','$stateParams']

  function itemsController(service, categories, $stateParams) {
    var iCtrl = this;
    var menu_items = [];
    var name = '';

    var item = categories[$stateParams.itemId];
    service.getItemsForCategory(item.short_name).then(function (result) {
      return menu_items = result.data.menu_items;
      console.log("inside promise, menu_items are:",menu_items);
      console.log("inside promise, name are:",name);
    });




    iCtrl.shortList = menu_items;
    // iCtrl.name = name;
    console.log('this is shortList: ', iCtrl.shortList);



  };
})()
