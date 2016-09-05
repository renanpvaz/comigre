'use strict';

import template from './places-filter.html';
import controller from './places-filter.ctrl';

const PlacesFilterComponent = {
  bindings: {
    onSelect: '&'
  },
  template,
  controller
};

export default PlacesFilterComponent;
