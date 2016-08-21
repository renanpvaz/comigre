import angular from 'angular';
import 'angular-simple-logger';
import 'ui-leaflet';

import mapComponent from './map.component';

const name = 'crMap';

const mapModule = angular.module(name, [
  'nemLogging',
  'ui-leaflet'
])

.component(name, mapComponent);

export default mapModule;
