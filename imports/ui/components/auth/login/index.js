import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import loginComponent from './login.component';
import './login.less';

const login = angular
  .module('auth.login', [
    ngMaterial,
    uiRouter
  ])
  .component('login', loginComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('login', {
        url: '^/login',
        parent: 'auth',
        component: 'login'
      });
  })
  .name;

export default login;
