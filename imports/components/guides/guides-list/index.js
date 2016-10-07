'use strict';

import angular from 'angular';

import GuidesListComponent from './guides-list.component';

const guidesList = angular
  .module('guidesList', [])
  .component('guidesList', GuidesListComponent)
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
