import angular from 'angular';

import template from './institutionRegister.html';
import controller from './institutionRegister.ctrl';

const name = 'institutionRegister';

const institutionRegisterComponent = {
  template,
  controller,
  controllerAs: 'vm'
};

export default angular
  .module(name, [])
  .component(name, institutionRegisterComponent);
