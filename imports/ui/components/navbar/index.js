import angular from 'angular';

import NavbarComponent from './navbar.component';

const navbar = angular
  .module('navbar', [
  ])
  .component('navbar', NavbarComponent)
  .name;

export default navbar;
