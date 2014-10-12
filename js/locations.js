var beaches = [];
var userLocation;
$.getJSON('test.json', function(data) {
    for (var ii=0;ii<=10;ii++){
      var lan = data.features[ii].geometry.coordinates[1];
      var lon = data.features[ii].geometry.coordinates[0];
      beaches.push([data.features[ii].properties.place, lan,lon, 2]);
     }
});
$.get("http://ipinfo.io", function(response) {
    userLocation = response.country;
    console.log(response.city, response.region, response.country);
}, "jsonp");
