import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './comigr.css';
import template from './comigr.html';

const name = 'comigr';

class Comigr {}

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controller: Comigr,
  controllerAs: 'vm'
})
