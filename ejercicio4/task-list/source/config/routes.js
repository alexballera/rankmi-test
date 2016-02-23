import angular from 'angular'
import uiRouter from 'angular-ui-router'

let routes = angular.module('App.routes', ['ui.router'])

routes.config(function($stateProvider, $urlRouterProvider) {
  // Inyeccion de dependencias router, angular
  $stateProvider
    .state('home', {
      url: "/",
      controller: 'taskListController',
      templateUrl: "task-list/controller.html"
    })
    .state('task', {
      url: "/{id}",
      controller: 'taskShowController',
      templateUrl: "task-list/show.html"
    })
  $urlRouterProvider.otherwise("/")
})

export default routes
