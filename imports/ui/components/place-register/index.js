import angular from 'angular';

import placeRegisterComponent from './place-register.component';

const placeRegister = angular
  .module('placeRegister', [])
  .component('placeRegister', placeRegisterComponent)
  .name;

export default placeRegister;
