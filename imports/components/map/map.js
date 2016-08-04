import angular from 'angular';
import 'angular-google-maps';
import 'angular-simple-logger';

import mapComponent from './map.component';

const name = 'crMap';

let mapModule = angular.module(name, [
  'nemLogging',
  'uiGmapgoogle-maps'
])

.component(name, mapComponent);

export default mapModule;
