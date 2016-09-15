'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';

import registerComponent from './register.component';

const register = angular
  .module('register', [
    uiRouter,
    ngMessages
  ])
  .component('register', registerComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('register', {
        url: '/cadastrar',
        component: 'register'
      });
  })
  .name;

export default register;
