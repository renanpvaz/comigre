'use strict';

import angular from 'angular';
import 'angular-simple-logger';
import 'leaflet';
import 'ui-leaflet';

import PlacesRegisterComponent from './places-register.component';

import PlacesRegisterService from './places-register.service';

const placesRegister = angular
  .module('placesRegister', [
    'nemLogging',
    'ui-leaflet'
  ])
  .component('placesRegister', PlacesRegisterComponent)
  .service('PlacesRegisterService', PlacesRegisterService)
  .name;

export default placesRegister;
