'use strict';

import angular from 'angular';

import guidesListComponent from './guides-list.component';

const guidesList = angular
  .module('guidesList', [])
  .component('guidesList', guidesListComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('guides', {
        url: '^/guias',
        parent: 'guide',
        component: 'guidesList'
      });
  })
  .name;

export default guidesList;
