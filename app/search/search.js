'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', [ '$scope',
function($scope) {
	$scope.results = [
		{
			id: "asd",
			name: "Running Down a Dream hello world hello world hello world hello world hello world",
			artist: "Tom Petty",
			album: "Full Moon Fever"
		},
		{
			id: "lkj",
			name: "Blue Suede Shoes",
			artist: "Elvis Presley",
			album: "Elvis Presley"
		}
	];
}]);