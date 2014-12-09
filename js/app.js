(function(){
var app = angular.module('seismoi', []);
app.controller('MainController', ['$http', function($http){
	var seismoi = this;
	seismoi.test =[];
	//document.write('<h1>LOADING...</h1>');
	$http.get('http://127.0.0.1:1337/').success(function(data){
		seismoi.test = data;
	});

}]);

})();
