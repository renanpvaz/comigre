import angular from 'angular';
import uiRouter from 'angular-ui-router';

import loginComponent from './login.component';

const login = angular
  .module('auth.login', [
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
