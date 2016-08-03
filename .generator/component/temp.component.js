'use strict';

import template from './<%= name %>.html';
import controller from './<%= name %>.ctrl';
import './<%= name %>.less';

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default <%= name %>Component;
