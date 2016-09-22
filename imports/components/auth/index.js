'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import authComponent from './auth.component';

const auth = angular
  .module('auth', [
    uiRouter
  ])
  .component('auth', authComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('auth', {
        url: '/auth',
        component: 'auth'
      });
  })
  .name;

export default auth;
