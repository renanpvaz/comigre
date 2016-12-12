import angular from 'angular';

import placesListComponent from './places-list.component';
import './places-list.less';

const placesList = angular
  .module('placesList', [])
  .component('placesList', placesListComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('places-list', {
        url: '^/listagem-locais',
        parent: 'app',
        component: 'placesList'
      });
  })
  .name;

export default placesList;
