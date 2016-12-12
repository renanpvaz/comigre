import angular from 'angular';

import typeIconComponent from './type-icon.component';

const typeIcon = angular
  .module('typeIcon', [])
  .component('typeIcon', typeIconComponent)
  .name;

export default typeIcon;
