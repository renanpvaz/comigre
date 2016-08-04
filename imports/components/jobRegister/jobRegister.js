import angular from 'angular';

import template from './jobRegister.html';
import controller from './jobRegister.ctrl';

const name = 'jobRegister';

const jobRegisterComponent = {
  restrict: 'E',
  bindings: {
    sidebarIsOpen: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default angular
  .module(name, [])
  .component(name, jobRegisterComponent);
