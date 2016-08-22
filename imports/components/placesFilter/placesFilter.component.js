'use strict';

import template from './placesFilter.html';
import controller from './placesFilter.ctrl';
import './placesFilter.less';

const placesFilterComponent = {
  restrict: 'E',
  bindings: {
    selected: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default placesFilterComponent;
