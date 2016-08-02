import angular from 'angular';
import 'angular-google-maps';
import 'angular-simple-logger';

import crMapComponent from './crMap.component';

const name = 'crMap';

let crMapModule = angular.module(name, [
  'nemLogging',
  'uiGmapgoogle-maps'
])

.component(name, crMapComponent);

export default crMapModule;
