import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './comigr.css';
import template from './comigr.html';

import sidebar from '../sidebar/sidebar';

const name = 'comigr';

class Comigr {}

export default angular.module(name, [
  angularMeteor,
  sidebar.name
]).component(name, {
  template,
  controller: Comigr,
  controllerAs: 'vm'
})
