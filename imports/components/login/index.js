'use strict';

import angular from 'angular';

import loginComponent from './login.component';

const login = angular
  .module('login', [])
  .component('login', loginComponent);

export default login;
