import angular from 'angular';
import uiRouter from 'angular-ui-router';

import placeRegisterConfirmComponent from './place-register-confirm.component';

const placeRegisterConfirm = angular
  .module('placeRegisterConfirm', [])
  .component('placeRegisterConfirm', placeRegisterConfirmComponent)
  .name;

export default placeRegisterConfirm;
