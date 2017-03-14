(function () {
  "use strict";

  angular.module('data')
  .service('MenuDataService', service);

  service.$inject=['$http'];
  function service($http) {
    var serv=this;

    var found = [];

    serv.getAllCategories = function () {
      var promise = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      });
      
      return promise;

    };

    serv.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
      });
      return response;
    };


  }
})()
