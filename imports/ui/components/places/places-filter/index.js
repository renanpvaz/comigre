'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';

import PlacesFilterComponent from './places-filter.component';

const placesFilter = angular
  .module('places.filter', [ ngMaterial ])
  .component('placesFilter', PlacesFilterComponent)  
  .name;

export default placesFilter;
