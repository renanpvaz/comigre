'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import guidesDetailComponent from './guides-detail.component';

const guidesDetail = angular
  .module('guidesDetail', [])
  .component('guidesDetail', guidesDetailComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('guides.detail', {
        url: '^/guis/{id}',
        parent: 'app',
        component: 'guidesDetail'
      });
  })
  .name;

export default guidesDetail;
