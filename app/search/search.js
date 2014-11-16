'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', [ '$scope', 'Spotify',
function($scope, Spotify) {
	
	$scope.songSearch = function() {
		Spotify.search($scope.searchTerm).then(function(data){
			$scope.results = data.data.tracks.items;
		});
	}
}]);