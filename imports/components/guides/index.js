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
        redirectTo: 'login',
        parent: 'app',
        component: 'guides'
        resolve: {
          guides: ($scope) => $scope.$ctrl.guides
        }
      });
  })
  .name;

export default guides;
