(function () {
  "use strict";

  angular.module('data')
  .service('MenuDataService', service);

  service.$inject=['$http'];
  function service($http) {
    var serv=this;

    var found = [];

    serv.getAllCategories = function () {
      var answer = [];
      var promise = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      });

      console.log('Ive returned :', answer);
      return promise;

    };

    serv.getItemsForCategory = function (categoryShortName) {
      var answer = [];
      var promise = $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
      });
      
      return promise;
    };


  }
})()
