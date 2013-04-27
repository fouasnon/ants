'use strict';


// Declare app level module which depends on filters, and services
angular.module('art', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/partials/hello_world.html'
    });
    $routeProvider.otherwise({redirectTo: '/'});
  }])
