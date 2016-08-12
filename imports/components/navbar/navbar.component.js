'use strict';

import template from './navbar.html';
import controller from './navbar.ctrl';
import './navbar.less';

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default navbarComponent;
