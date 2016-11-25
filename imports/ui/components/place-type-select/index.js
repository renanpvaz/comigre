import angular from 'angular';
import uiRouter from 'angular-ui-router';

import placeTypeSelectComponent from './place-type-select.component';
import './place-type-select.less';

const placeTypeSelect = angular
  .module('placeTypeSelect', [])
  .component('placeTypeSelect', placeTypeSelectComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('placetypeselect', {
        url: '^/tipo-do-local',
        parent: 'app',
        component: 'placeTypeSelect'
      });
  })
  .name;

export default placeTypeSelect;
