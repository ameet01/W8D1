export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    for(var i = 0; i < benches.length; i++) {
      if(!this.markers.hasOwnProperty(benches[i].id)) {
        this.createMarkerFromBench(benches[i]);
        this.markers[benches[i].id] = benches[i];
      }
    }
  }

  createMarkerFromBench(bench) {
    var coordinates = {lat: bench.lat, lng: bench.lng}

    var marker = new google.maps.Marker({
      position: coordinates,
      title: bench.description
    })

    marker.setMap(this.map);
  }
}
