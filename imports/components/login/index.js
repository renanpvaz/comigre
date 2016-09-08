'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';

import loginComponent from './login.component';

const login = angular
  .module('login', [ngMaterial])
  .component('login', loginComponent)
  .name;

export default login;
