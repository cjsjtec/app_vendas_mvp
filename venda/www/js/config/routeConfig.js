angular.module('appVendas').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('index', {
    url: "/",
    templateUrl: "views/home.html"
  })
  .state('venda', {
    url: "/venda",
    templateUrl: "views/venda.html"
  })

  $urlRouterProvider.otherwise("/");

});