import assign from 'angular-assign';
import { Map, LngLat, Marker, NavigationControl } from 'mapbox-gl/dist/mapbox-gl.js';

class PlacePositionSelectCtrl {
  constructor($window, $scope, PlacePositionSelectService) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.markerElement = this.$window.document.createElement('div');
    this.markerElement.innerHTML = `
      <div class="dot"></div>
      <div class="pulse"></div>`;

    this.map = new Map({
      container: 'map',
      center: [-52.2599, -15.893],
      zoom: 3,
      style: 'mapbox://styles/mapbox/basic-v9'
    });

    this.map.on('load', () => this.onMapLoad());
    this.map.on('click', (e) => this.onMapClick(e));
  }

  onMapLoad() {
    this.getUserLocation();
    this.map.addControl(new NavigationControl());
  }

  onMapClick({ lngLat }) {
    this.addMarker(lngLat);

    this.PlacePositionSelectService.inverseGeocode(lngLat).then(
      (address) => {
          this.address = address;
          this.formattedAddress =
            `${address.street} - ${address.neighborhood} ${address.city} - ${address.state}.`;
        }
    );
  }

  addMarker(lngLat) {
    if (this.marker) {
      this.marker.remove();
    }

    this.marker = new Marker(this.markerElement)
      .setLngLat(lngLat)
      .addTo(this.map);
  }

  getUserLocation() {
    if (!('geolocation' in this.$window.navigator)) {
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = ({ coords: { latitude: lat, longitude: lng }}) => {
      this.map.setCenter(new LngLat(lng, lat)).zoomTo(15);
    };

    this.$window.navigator.geolocation
      .getCurrentPosition(success, console.error, options);
  }

  confirm() {
    this.onConfirm({
      $event: {
        address: this.address,
        coordinates: this.map.getCenter()
      }
    });
  }
}

export default PlacePositionSelectCtrl;
