import angular from 'angular';

import placeRegisterPositionComponent from './place-register-position.component';
import PlaceRegisterPositionService from './place-register-position.service';
import './place-register-position.less';

const placeRegisterPosition = angular
  .module('placeRegisterPosition', [])
  .component('placeRegisterPosition', placeRegisterPositionComponent)
  .service('PlaceRegisterPositionService', PlaceRegisterPositionService)
  .name;

export default placeRegisterPosition;
