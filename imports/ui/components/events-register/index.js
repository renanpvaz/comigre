import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-messages';
import uiMask from 'angular-ui-mask';

import eventsRegisterComponent from './events-register.component';

import placesRegister from '../places/places-register';

const eventsRegister = angular
  .module('eventsRegister', [
    uiRouter,
    uiMask,
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
