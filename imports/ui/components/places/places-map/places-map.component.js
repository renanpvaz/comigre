import template from './places-map.html';
import controller from './places-map.ctrl';

const PlacesMapComponent = {
  bindings: {
    geoCenter: '<',
    places: '<',
    selectedPlace: '<'
  },
  template,
  controller
};

export default PlacesMapComponent;
