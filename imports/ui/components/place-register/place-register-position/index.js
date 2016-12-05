import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

import placeRegisterPositionComponent from './place-register-position.component';
import PlaceRegisterPositionService from './place-register-position.service';
import './place-register-position.less';

const placeRegisterPosition = angular
  .module('placeRegisterPosition', [])
  .component('placeRegisterPosition', placeRegisterPositionComponent)
  .service('PlaceRegisterPositionService', PlaceRegisterPositionService)
  .config(() => {
    mapboxgl.accessToken = Meteor.settings.public.mapboxAccessToken;
  })
  .name;

export default placeRegisterPosition;
