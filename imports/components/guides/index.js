'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import guidesComponent from './guides.component';
import './guides.less';

const guides = angular
  .module('guides', [
    uiRouter
  ])
  .component('guides', guidesComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('guide', {
        url: '^/guia',
        parent: 'app',
        component: 'guides'
      });
  })
  .name;

export default guides;
