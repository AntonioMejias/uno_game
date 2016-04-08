'use strict';

angular.module('UnoGame',['ngMaterial','ngRoute'])
		
.config(['$routeProvider', function($routeProvider) {

  $routeProvider

  	.when('/view1', 
  		{templateUrl: 'angular-views/p.html'})

  	.when('/home', 
  		{templateUrl: 'angular-views/home.html'});

  $routeProvider.otherwise({redirectTo: '/home'});



}]);