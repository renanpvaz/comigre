'use strict';

import angular from 'angular';

import registerComponent from './register.component';

const register = angular
  .module('register', [])
  .component('register', registerComponent)
  .name;

export default register;
