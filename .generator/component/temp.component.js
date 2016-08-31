'use strict';

import template from './<%= name %>.html';
import controller from './<%= name %>.ctrl';
import './<%= name %>.less';

const <%= name %>Component = {
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default <%= name %>Component;
