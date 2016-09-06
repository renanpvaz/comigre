'use strict';

import angular from 'angular';

import <%= name %>Component from './<%= dashedName %>.component';

const <%= name %> = angular
  .module('<%= name %>', [])
  .component('<%= name %>', <%= name %>Component);

export default <%= name %>;
