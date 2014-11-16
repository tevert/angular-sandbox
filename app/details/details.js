'use strict';

angular.module('myApp.details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/:detailId', {
    templateUrl: 'details/details.html',
    controller: 'DetailsCtrl'
  });
}])

.controller('DetailsCtrl', [ '$scope', '$routeParams', 'Echonest',
function($scope, $routeParams, Echonest) {
	$scope.id = $routeParams.detailId;
	Echonest.details($scope.id).then(function(data){
		if (data.data.response.status.code == 0) {
			$scope.song = data.data.response.songs[0];
		} else {
			$scope.error = data.data.response.status;
		}
	});
}]);