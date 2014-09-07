'use strict';

/**
 * @ngdoc overview
 * @name kraangApp
 * @description
 * # kraangApp
 *
 * Main module of the application.
 */
angular
  .module('kraangApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
