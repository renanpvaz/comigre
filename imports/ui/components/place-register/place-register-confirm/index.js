import angular from 'angular';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

import placeRegisterConfirmComponent from './place-register-confirm.component';

const placeRegisterConfirm = angular
  .module('placeRegisterConfirm', [])
  .component('placeRegisterConfirm', placeRegisterConfirmComponent)
  .config($stateProvider => {
    'ngInject';

    mapboxgl.accessToken = Meteor.settings.public.mapboxAccessToken;

    $stateProvider
      .state('placeregisterconfirm', {
        url: '^/confirmar-cadastro',
        parent: 'app',
        component: 'placeRegisterConfirm'
      });
  })
  .name;

export default placeRegisterConfirm;
