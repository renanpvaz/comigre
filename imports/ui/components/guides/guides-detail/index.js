import angular from 'angular';
import uiRouter from 'angular-ui-router';

import guidesDetailComponent from './guides-detail.component';

const guidesDetail = angular
  .module('guides.detail', [])
  .component('guidesDetail', guidesDetailComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('guides.detail', {
        url: '^/guides/{id}',
        parent: 'guides',
        component: 'guidesDetail'
      });
  })
  .name;

export default guidesDetail;
