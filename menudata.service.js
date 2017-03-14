(function () {
  "use strict";

  angular.module('data')
  .service('MenuDataService', service);

  service.$inject=['$http'];
  function service($http) {
    var serv=this;

    serv.getAllCategories = function () {
      var promise = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function (result) {
        return result.data;
        console.log(result.data);
      });
      return promise;
    };

  }
})()
