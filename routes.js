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
        templateUrl: '/templates/home.html'
      })
      .state('categoriesList',{
        url: '/cat-list',
        templateUrl: '/templates/categories.html',
        controller: 'MainController as catCtrl',
        resolve: {
          categories: ['MenuDataService', function (service) {
            // debugger;
            return service.getAllCategories();

          }]
        }
      })
      .state('categoriesList.items',{
        templateUrl: '/templates/items.html',
        controller: 'ItemsController as iCtrl',
        params: {
          itemId: null
        }
        // resolve: {
        //   items: ['MenuDataService','categories', function (service, categories) {
        //
        //
        //
        //   }]
        // }
      })
   };


})();
