import angular from 'angular';

import placeRegisterTypeComponent from './place-register-type.component';
import './place-register-type.less';

const placeRegisterType = angular
  .module('placeRegisterType', [])
  .component('placeRegisterType', placeRegisterTypeComponent)
  .name;

export default placeRegisterType;
