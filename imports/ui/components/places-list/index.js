import angular from 'angular';

import placesListComponent from './places-list.component';
import './places-list.less';
import typeIcon from '../type-icon';

const placesList = angular
  .module('placesList', [
    typeIcon
  ])
  .component('placesList', placesListComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('places-list', {
        url: '^/locais/meus',
        parent: 'app',
        component: 'placesList'
      });
  })
  .name;

export default placesList;
