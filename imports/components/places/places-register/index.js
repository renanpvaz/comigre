'use strict';

import angular from 'angular';

import placesRegisterComponent from './places-register.component';

import PlacesRegisterService from './places-register.service';

const placesRegister = angular
  .module('placesRegister', [
    'nemLogging',
    'ui-leaflet'
  ])
  .component('placesRegister', placesRegisterComponent)
  .service('PlacesRegisterService', PlacesRegisterService)
  .name;

export default placesRegister;
