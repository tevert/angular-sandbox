
angular.module('myApp.echonest', [])
.factory('Echonest', [ '$http', function($http) {
	var details = function (id) {
		return $http({
			url: "http://developer.echonest.com/api/v4/song/profile?track_id=spotify:track:" + id + 
				"&api_key=XMQ6RZAR8PF44PMEJ&bucket=audio_summary&bucket=artist_discovery&bucket=artist_discovery_rank" +
				"&bucket=artist_familiarity&bucket=artist_familiarity_rank&bucket=artist_hotttnesss" + 
				"&bucket=artist_hotttnesss_rank&bucket=artist_location&bucket=song_currency&bucket=song_currency_rank" +
				"&bucket=song_discovery&bucket=song_discovery_rank&bucket=song_hotttnesss&bucket=song_hotttnesss_rank" +
				"&bucket=song_type&bucket=tracks",
			method: "GET"
		}).success(function(data, status, headers, config) {
			// Do some transforming so we have a more usable object
			return data.response.songs[0];
		}).error(function(data, status, headers, config) {
			return data;
		});
	};
	
	return {
		details: details
	};
}]);