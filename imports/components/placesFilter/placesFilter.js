'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';
import placesFilterComponent from './placesFilter.component';

const placesFilterModule = angular.module('placesFilter', [
  ngMaterial
])

.component('placesFilter', placesFilterComponent);

export default placesFilterModule;
