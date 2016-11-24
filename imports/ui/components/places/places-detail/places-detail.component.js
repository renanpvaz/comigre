'use strict';

import template from './places-detail.html';
import controller from './places-detail.ctrl';

const PlacesDetailComponent = {
  bindings: {
    id: '<'
  },
  template,
  controller
};

export default PlacesDetailComponent;
