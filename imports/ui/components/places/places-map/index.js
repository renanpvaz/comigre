'use strict';

import angular from 'angular';
import 'angular-simple-logger';
import 'leaflet';
import 'ui-leaflet';

import PlacesMapComponent from './places-map.component';

const placesMap = angular
  .module('places.map', [
    'nemLogging',
    'ui-leaflet'
  ])
  .component('placesMap', PlacesMapComponent)
  .name;

export default placesMap;
