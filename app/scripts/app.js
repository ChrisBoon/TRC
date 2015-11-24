'use strict';

/**
 * @ngdoc overview
 * @name trcApp
 * @description
 * # trcApp
 *
 * Main module of the application.
 */
angular
  .module('trcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/browse/:id', {
        templateUrl: 'views/folders.html',
        controller: 'FoldersCtrl',
        controllerAs: 'folder'
      })
      .when('/files/:id', {
        templateUrl: 'views/files.html',
        controller: 'FilesCtrl',
        controllerAs: 'files'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
