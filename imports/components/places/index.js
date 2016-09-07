'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import PlacesComponent from './places.component';
import PlacesService from './places.service';

import placesFilter from './places-filter/index';
import placesMap from './places-map/index';
import placesDetail from './places-detail/index';

const places = angular
  .module('places', [
    ngMaterial,
    uiRouter,
    placesFilter,
    placesMap,
    placesDetail
  ])
  .component('places', PlacesComponent)
  .service('PlacesService', PlacesService)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('places', {
        url: '/locais?id',
        component: 'places'
      });
  })
  .name;

export default places;
