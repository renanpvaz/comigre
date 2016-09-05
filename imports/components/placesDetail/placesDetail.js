'use strict';

import angular from 'angular';
import placesDetailComponent from './placesDetail.component';
import ngMaterial from 'angular-material';

const name = 'placesDetail';

const placesDetail = angular
  .module(name, [ ngMaterial ])
  .component(name, placesDetailComponent);

export default placesDetail;
