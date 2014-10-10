(function(){
var app = angular.module('seismoi', []);
app.controller('MainController', ['$http', function($http){
	var seismoi = this;
	seismoi.test =[];
	//document.write('<h1>LOADING...</h1>');
	$http.get('test.json').success(function(data){
		seismoi.test = data;
	});

}]);

})();
