(function () {
  "use strict";

  angular.module('MenuApp')
   .config(RoutesConfig);

   RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
   function RoutesConfig($stateProvider,$urlRouterProvider) {

     $urlRouterProvider.otherwise('/');

     $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'templates/home.html'
      })
      .state('categoriesList',{
        url: '/cat-list',
        templateUrl: 'templates/categories.html',
        controller: 'MainController as catCtrl',
        resolve: {
          categories: ['MenuDataService', function (service) {
            // debugger;
            return service.getAllCategories().then(function (response) {
              return response.data;
            });

          }]
        }
      })
      .state('items',{
        url: '/items/{itemId}',
        templateUrl: 'templates/items.html',
        controller: 'ItemsController as iCtrl',
        resolve: {
          itemData: ['$stateParams', 'MenuDataService', function (params,service) {
            // debugger;
            return service.getItemsForCategory(params.itemId).then(function (r) {
              // console.log(r.data);
              return r.data;
            })
          }]
        }
        // params: {
        //   itemId: null
        // }
      })
   };


})();
