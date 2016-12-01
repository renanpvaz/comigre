import angular from 'angular';
import uiRouter from 'angular-ui-router';

import guidesComponent from './guides.component';
import './guides.less';

import guidesList from './guides-list';
import guidesDetail from './guides-detail';

const guides = angular
  .module('guides', [
    uiRouter,
    guidesList,
    guidesDetail
  ])
  .component('guides', guidesComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('guides', {
        redirectTo: 'guides.list',
        url: '^/guia',
        parent: 'app',
        component: 'guides'
      });
  })
  .name;

export default guides;
