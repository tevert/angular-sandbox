angular.module('myApp.JSONObject', [])
.directive('jsonObject', function () {
	var getRows = new function(object) {
		var html = "";
		if (typeof(val) === "object") {
			angular.forEach(Object.keys(object), function (val, index) {
				if (typeof(val) === "object") {
					html += getRows(val);
				} else {
					html += "<td>" + index + "</td><td>" + val + "</td>";
				}
			});
		}
		return html;
	}
	
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var html = '<table>';
			html += scope[attrs.data];
            html += '</table>';
            element.replaceWith(html)
        }
    }
});