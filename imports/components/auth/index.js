import angular from 'angular';
import uiRouter from 'angular-ui-router';

import authComponent from './auth.component';
import './auth.less';

import login from './login/index';
import register from './register/index';

const auth = angular
  .module('auth', [
    uiRouter,
    login,
    register
  ])
  .component('auth', authComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('auth', {
        redirectTo: 'login',
        url: '/auth',
        component: 'auth'
      });
  })
  .name;

export default auth;
