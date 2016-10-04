'use strict';

import angular from 'angular';

import GuidesDetailComponent from './guides-detail.component';

const guidesDetail = angular
  .module('guides-detail', [])
  .component('guides-detail', guidesDetailComponent)
  .name;

export default guidesDetail;
