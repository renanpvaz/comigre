'use strict';

import template from './placesFilter.html';
import controller from './placesFilter.ctrl';

const placesFilterComponent = {
  bindings: {
    onSelect: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default placesFilterComponent;
