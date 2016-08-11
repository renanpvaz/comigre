'use strict';

import template from './locations.html';
import controller from './locations.ctrl';
import './locations.less';

let locationsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default locationsComponent;
