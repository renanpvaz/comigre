import angular from 'angular';
import uiRouter from 'angular-ui-router';

import placeRegisterComponent from './place-register.component';
import './place-register.less';

import placeRegisterInfo from './place-register-info';
import placePositionSelect from './place-register-position';
import placeTypeSelect from './place-register-type';
import breadcrumbs from '../breadcrumbs';

const placeRegister = angular
  .module('placeRegister', [
    placePositionSelect,
    placeTypeSelect,
    breadcrumbs,
    placeRegisterInfo
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
