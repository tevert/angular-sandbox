'use strict';

angular.module('myApp.spotify', [])
.factory('Spotify', [ '$http', function($http) {
	var search = function (query) {
		return $http({
			url: "https://api.spotify.com/v1/search",
			method: "GET",
			params: {
				type: "track",
				q: query
			}
		}).success(function(data, status, headers, config) {
			return data;
		}).error(function(data, status, headers, config) {
			return data;
		});
	};
	
	return {
		search: search
	};
}]);