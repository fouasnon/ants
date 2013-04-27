'use strict';


// Declare app level module which depends on filters, and services
angular.module('art', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/art-2.0', {
      templateUrl: 'partials/hello_world.html'
    });
    $routeProvider.otherwise({redirectTo: '/'});
  }])
