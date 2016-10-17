import angular from 'angular';

import guidesDetailComponent from './guides-detail.component';

const guidesDetail = angular
  .module('guidesDetail', [])
  .component('guidesDetail', guidesDetailComponent)
  .name;

export default guidesDetail;
