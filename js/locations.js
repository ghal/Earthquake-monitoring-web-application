var beaches = [];
$.getJSON('test.json', function(data) {
    for (var ii=0;ii<=10;ii++){
      var lan = data.features[ii].geometry.coordinates[1];
      var lon = data.features[ii].geometry.coordinates[0];
      beaches.push([data.features[ii].properties.place, lan,lon, 2]);
     }
});
