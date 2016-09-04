'use strict';

import angular from 'angular';
import <%= name %>Component from './<%= name %>.component';

const <%= name %> = angular
  .module('<%= name %>', [])
  .component('<%= name %>', <%= name %>Component);

export default <%= name %>;
