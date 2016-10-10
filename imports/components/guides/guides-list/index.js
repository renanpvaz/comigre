'use strict';

import angular from 'angular';

import guidesListComponent from './guides-list.component';

const guidesList = angular
  .module('guidesList', [])
  .component('guidesList', guidesListComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('guidesList', {
        url: '^/guias',
        parent: 'guides',
        component: 'guidesList'
      });
  })
  .name;

export default guidesList;
