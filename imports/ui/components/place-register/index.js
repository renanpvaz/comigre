import angular from 'angular';
import uiRouter from 'angular-ui-router';

import placeRegisterComponent from './place-register.component';
import './place-register.less';

const placeRegister = angular
  .module('placeRegister', [])
  .component('placeRegister', placeRegisterComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('placeregister', {
        url: '^/cadastro',
        parent: 'app',
        component: 'placeRegister'
      });
  })
  .name;

export default placeRegister;
