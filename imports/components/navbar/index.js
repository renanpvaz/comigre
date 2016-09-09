'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';

import auth from '../auth/index';
import NavbarComponent from './navbar.component';

const navbar = angular
  .module('navbar', [
    ngMaterial,
    auth
  ])
  .component('navbar', NavbarComponent)
  .name;

export default navbar;
