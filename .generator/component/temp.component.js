'use strict';

import template from './<%= dashedName %>.html';
import controller from './<%= dashedName %>.ctrl';
import './<%= dashedName %>.less';

const <%= upCaseName %>Component = {
  bindings: {},
  template,
  controller
};

export default <%= upCaseName %>Component;
