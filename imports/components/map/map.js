'use strict';

import angular from 'angular';
import 'angular-simple-logger';
import 'ui-leaflet';

import mapComponent from './map.component';
import MapService from './map.service';
import placesFilter from '../placesFilter/placesFilter';

const name = 'crMap';

const mapModule = angular
  .module(name, [
    'nemLogging',
    'ui-leaflet',
    placesFilter.name
  ])
  .component(name, mapComponent)
  .service('MapService', MapService);

export default mapModule;
