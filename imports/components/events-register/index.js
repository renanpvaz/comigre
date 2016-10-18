import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-messages';

import eventsRegisterComponent from './events-register.component';

import placesRegister from '../places/places-register/index';

const eventsRegister = angular
  .module('eventsRegister', [
    uiRouter,
    placesRegister,
    'nemLogging',
    'ui-leaflet',
    ngMaterial
  ])
  .component('eventsRegister', eventsRegisterComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('event', {
        url: '^/evento',
        parent: 'app',
        component: 'eventsRegister'
      });
  })
  .name;

export default eventsRegister;
