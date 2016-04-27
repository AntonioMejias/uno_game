'use strict';

angular.module('UnoGame',['ngMaterial','ngRoute','ngMdIcons', 'ngMessages'])
		
.config(['$routeProvider', function($routeProvider) {

  $routeProvider

  	.when('/view1', 
  		{templateUrl: 'angular-views/p.html'})

  	.when('/register', 
  		{templateUrl: 'angular-views/register.html'})

  	.when('/', 
  		{templateUrl: 'angular-views/home.html'});

  $routeProvider.otherwise({redirectTo: '/'});



}]);