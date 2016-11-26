import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

import placeRegisterComponent from './place-register.component';
import PlaceRegisterService from './place-register.service';
import './place-register.less';

const placeRegister = angular
  .module('placeRegister', [])
  .component('placeRegister', placeRegisterComponent)
  .service('PlaceRegisterService', PlaceRegisterService)
  .config($stateProvider => {
    'ngInject';

    mapboxgl.accessToken = Meteor.settings.public.mapboxAccessToken;

    $stateProvider
      .state('placeregister', {
        url: '^/cadastro',
        parent: 'app',
        component: 'placeRegister'
      });
  })
  .name;

export default placeRegister;
