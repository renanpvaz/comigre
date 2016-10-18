import angular from 'angular';

import guidesListComponent from './guides-list.component';

const guidesList = angular
  .module('guides.list', [])
  .component('guidesList', guidesListComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('guides.list', {
        url: '^/guias',
        parent: 'guides',
        component: 'guidesList'
      });
  })
  .name;

export default guidesList;
