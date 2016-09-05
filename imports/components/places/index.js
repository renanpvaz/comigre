'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';

import PlacesComponent from './places.component';
import PlacesService from './places.service';

import placesFilter from './places-filter/index';
import placesMap from './places-map/index';
import placesDetail from './places-detail/index';

const places = angular
  .module('places', [
    ngMaterial,
    placesFilter,
    placesMap,
    placesDetail
  ])
  .component('places', PlacesComponent)
  .service('PlacesService', PlacesService)
  .name;

export default places;
