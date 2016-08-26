import angular from 'angular';
import 'angular-simple-logger';
import 'ui-leaflet';

import mapComponent from './map.component';
import placesFilter from '../placesFilter/placesFilter';
import placeDetail from '../placeDetail/placeDetail';

const name = 'crMap';

const mapModule = angular.module(name, [
  'nemLogging',
  'ui-leaflet',
  placesFilter.name,
  placeDetail.name,
])

.component(name, mapComponent);

export default mapModule;
