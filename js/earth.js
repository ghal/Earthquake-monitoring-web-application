// The following example creates complex markers to indicate earthquakes all over the world.
var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var mapOptions = {
         zoom: 6,
         center: new google.maps.LatLng(38.092913, 24.9346141),
         disableDefaultUI: true
  }
   map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  codeAddress();
  setMarkers(map, beaches);
}

function codeAddress() {
  var address = userLocation;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      console.log(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location

      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function setMarkers(map, locations) {
  // Add circles to the map


  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var fColor;
    if(beach[3] <= 3.5){
      fColor = "green"
    }else if(beach[3] > 3.5 && beach[3] < 4){
      fColor = "yellow"
    }else{
      fColor = "red"
    }
    var circle = new google.maps.Circle({
      center: myLatLng,
      map: map,
      radius:2500*beach[3],
      strokeWeight: 1,
      fillColor: fColor,
      zIndex: beach[3]

    });
  }
}
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude+","+position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=1&size=400x300&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

getLocation();



google.maps.event.addDomListener(window, 'load', initialize);
