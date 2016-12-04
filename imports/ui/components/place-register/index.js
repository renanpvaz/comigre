import angular from 'angular';
import uiRouter from 'angular-ui-router';

import placeRegisterComponent from './place-register.component';
import './place-register.less';

import placePositionSelect from '../place-position-select';

const placeRegister = angular
  .module('placeRegister', [
    placePositionSelect
  ])
  .component('placeRegister', placeRegisterComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('place-register', {
        url: '^/cadastro',
        parent: 'app',
        component: 'placeRegister'
      });
  })
  .name;

export default placeRegister;
