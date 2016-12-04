import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

import placePositionSelectComponent from './place-position-select.component';
import PlacePositionSelectService from './place-position-select.service';
import './place-position-select.less';

const placePositionSelect = angular
  .module('placePositionSelect', [])
  .component('placePositionSelect', placePositionSelectComponent)
  .service('PlacePositionSelectService', PlacePositionSelectService)
  .config($stateProvider => {
    'ngInject';

    mapboxgl.accessToken = Meteor.settings.public.mapboxAccessToken;
  })
  .name;

export default placePositionSelect;
