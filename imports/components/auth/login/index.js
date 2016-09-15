'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import loginComponent from './login.component';

const login = angular
  .module('auth.login', [
    ngMaterial,
    uiRouter
  ])
  .component('login', loginComponent)
  .name;

export default login;
