function insertMap(latitude, longitude) {
    var location = {lat: latitude , lng: longitude};
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 15,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

}
