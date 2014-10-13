var beaches = [];
var userLocation;

// var jsonUrl = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson?callback=?";
// $.getJSON(jsonUrl, function(data) {
//     for (var ii=0;ii<=10;ii++){
//       var lan = data.features[ii].geometry.coordinates[1];
//       var lon = data.features[ii].geometry.coordinates[0];
//       beaches.push([data.features[ii].properties.place, lan,lon, data.features[ii].properties.mag]);
//     }
// });

$.get("test.json", function(data) {
        for (var ii=0;ii<=100;ii++){
          var lan = data.features[ii].geometry.coordinates[1];
          var lon = data.features[ii].geometry.coordinates[0];
          beaches.push([data.features[ii].properties.place, lan,lon, data.features[ii].properties.mag]);
          //console.log(data);
        }
}, "json");

$.get("http://ipinfo.io", function(response) {
    userLocation = response.country;
    console.log(response.city, response.region, response.country);
}, "jsonp");
