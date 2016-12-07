import { Map, LngLat, Marker, NavigationControl } from 'mapbox-gl/dist/mapbox-gl.js';

class PlaceRegisterConfirmCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.mapCenter = [0, 0];
    // this.map = new Map({
    //   container: 'map',
    //   center: this.mapCenter,
    //   zoom: 9,
    //   style: 'mapbox://styles/mapbox/basic-v9',
    //   interactive: false
    // });
  }
}

export default PlaceRegisterConfirmCtrl;
