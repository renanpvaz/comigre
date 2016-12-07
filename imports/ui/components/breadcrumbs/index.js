import angular from 'angular';

import breadcrumbsComponent from './breadcrumbs.component';

const breadcrumbs = angular
  .module('breadcrumbs', [])
  .component('breadcrumbs', breadcrumbsComponent)
  .name;

export default breadcrumbs;
