'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import guidesComponent from './guides.component';
import './guides.less';

import guidesList from './guides-list/index';

const guides = angular
  .module('guides', [
    uiRouter,
    guidesList
  ])
  .component('guides', guidesComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('guide', {
        redirectTo: 'guidesList',
        url: '^/guia',
        parent: 'app',
        component: 'guides'
      });
  })
  .name;

export default guides;
