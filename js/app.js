(function(){
var app = angular.module('seismoi', []);
app.controller('MainController', ['$http', function($http){
	var seismoi = this;
	seismoi.test =[];
	//document.write('<h1>LOADING...</h1>');
	$http.get('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson').success(function(data){
		seismoi.test = data;
	});

}]);

})();
