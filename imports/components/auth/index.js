'use strict';

import angular from 'angular';

import authComponent from './auth.component';

import login from './login/index';
import register from './register/index';

const auth = angular
  .module('auth', [ 
    login,
    register
  ])
  .component('auth', authComponent)
  .name;

export default auth;
