'use strict';

/**
 * @ngdoc overview
 * @name rssFeedApp
 * @description
 * # rssFeedApp
 *
 * Main module of the application.
 */
angular
  .module('rssFeedApp', [
    'ngRoute'
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
