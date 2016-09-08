'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';

import login from '../login/index';
import NavbarComponent from './navbar.component';

const navbar = angular
  .module('navbar', [
    ngMaterial,
    login
  ])
  .component('navbar', NavbarComponent)
  .name;

export default navbar;
