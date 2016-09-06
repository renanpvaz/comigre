'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';

import NavbarComponent from './navbar.component';

const navbar = angular
  .module('navbar', [
    ngMaterial
  ])
  .component('navbar', NavbarComponent)
  .name;

export default navbar;
