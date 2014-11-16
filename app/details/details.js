'use strict';

angular.module('myApp.details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/:detailId', {
    templateUrl: 'details/details.html',
    controller: 'DetailsCtrl'
  });
}])

.controller('DetailsCtrl', [ '$scope', '$routeParams', 
function($scope, $routeParams) {
	$scope.id = $routeParams.detailId;
}]);