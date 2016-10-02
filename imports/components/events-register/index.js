'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import eventsRegisterComponent from './events-register.component';

import EventsRegisterService from './events-register.service';

const eventsRegister = angular
  .module('eventsRegister', [
    uiRouter,
    'nemLogging',
    'ui-leaflet'
  ])
  .component('eventsRegister', eventsRegisterComponent)
  .service('EventsRegisterService', EventsRegisterService)
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
