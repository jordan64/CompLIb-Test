'use strict';

/**
 * @ngdoc overview
 * @name garrettApp
 * @description
 * # garrettApp
 *
 * Main module of the application.
 */

angular
  .module('compLibApp', [
    'ngRoute',
    'ngResource',
    'tmp-components'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/details/:vignetteId', {
        templateUrl: 'views/details.html',
        controller: 'DetailsController'
      })
      .otherwise({
        redirectTo: '/'
      });

      // Clean up URL's to get rid of # and keep them readable

      $locationProvider.html5Mode(true);
  });
