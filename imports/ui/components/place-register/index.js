import angular from 'angular';
import uiRouter from 'angular-ui-router';

import placeRegisterComponent from './place-register.component';
import './place-register.less';

import placeRegisterInfo from './place-register-info';
import placeRegisterConfirm from './place-register-confirm';
import placePositionSelect from './place-register-position';
import placeI18n from './place-register-i18n';

import placeTypeSelect from './place-register-type';
import breadcrumbs from '../breadcrumbs';

const placeRegister = angular
  .module('placeRegister', [
    placePositionSelect,
    placeTypeSelect,
    placeI18n,
    placeRegisterConfirm,
    breadcrumbs,
    placeRegisterInfo
  ])
  .component('placeRegister', placeRegisterComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('place-register', {
        url: '^/locais/cadastro',
        parent: 'app',
        component: 'placeRegister'
      });
  })
  .name;

export default placeRegister;
