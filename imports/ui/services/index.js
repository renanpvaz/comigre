import angular from 'angular';

import emitter from './emitter';

const services = angular
  .module('services', [])
  .factory('$emit', emitter)
  .name;

export default services;
