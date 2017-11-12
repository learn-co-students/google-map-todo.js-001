$(document).ready(function(){

  function getLocation() {

    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position) {
        var long = position.coords.longitude
        var lat = position.coords.latitude
        $("#longitude").text(long)
        $("#latitude").text(lat);

        insertMap(lat, long)

        });
    }
  }

  getLocation();

});
