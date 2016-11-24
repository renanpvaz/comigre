'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';

import PlacesDetailComponent from './places-detail.component';

const placesDetail = angular
  .module('places.detail', [ ngMaterial ])
  .component('placesDetail', PlacesDetailComponent)
  .name;

export default placesDetail;
