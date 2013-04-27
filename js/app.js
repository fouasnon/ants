'use strict';


// Declare app level module which depends on filters, and services
angular.module('art', ['art.filters', 'art.services', 'art.directives', 'art.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/partials/hello_world.html'
    });
    $routeProvider.otherwise({redirectTo: '/'});
  }])
