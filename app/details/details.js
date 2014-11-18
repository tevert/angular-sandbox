'use strict';

angular.module('myApp.details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/:detailId', {
    templateUrl: 'details/details.html',
    controller: 'DetailsCtrl'
  });
}])

.controller('DetailsCtrl', [ '$scope', '$routeParams', '$sce', 'Echonest',
function($scope, $routeParams, $sce, Echonest) {
	$scope.songDataLoaded = false;
	$scope.id = $routeParams.detailId;
	$scope.spotifyEmbed = $sce.trustAsResourceUrl("https://embed.spotify.com/?uri=spotify:track:" + $scope.id);
	Echonest.details($scope.id).then(function(data){
		if (data.data.response.status.code == 0) {
			$scope.song = data.data.response.songs[0];
			$scope.songDataLoaded = true;
		} else {
			$scope.error = data.data.response.status;
		}
	});
}]);