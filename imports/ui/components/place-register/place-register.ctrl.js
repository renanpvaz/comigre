import { Meteor } from 'meteor/meteor';
import assign from 'angular-assign';
import mapboxgl, { Map, LngLat } from 'mapbox-gl/dist/mapbox-gl.js';

class PlaceRegisterCtrl {
  constructor($window) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.selected = {};

    mapboxgl.accessToken = Meteor.settings.public.mapboxAccessToken;

    this.map = new Map({
      container: 'map',
      center: [-52.2599, -15.893],
      zoom: 3,
      style: 'mapbox://styles/mapbox/basic-v9'
    });

    this.map.on('load', () => {
      this.getUserLocation();
      this.map.addControl(new mapboxgl.NavigationControl());
    });

    this.map.on('click', (e) => {
      console.log(e);
      this.selected.lat = e.lngLat.lat;
      this.selected.lng = e.lngLat.lng;
    });
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
}

export default PlaceRegisterCtrl;
