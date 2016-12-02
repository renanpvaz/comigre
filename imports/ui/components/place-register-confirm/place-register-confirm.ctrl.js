import { Map, LngLat, Marker, NavigationControl } from 'mapbox-gl/dist/mapbox-gl.js';

class PlaceRegisterConfirmCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.map = new Map({
      container: 'map',
      center: [-74.50, 40],
      zoom: 9,
      style: 'mapbox://styles/mapbox/basic-v9',
      interactive: false
    });
  }
}

export default PlaceRegisterConfirmCtrl;
