'use strict';

import template from './places-register.html';
import controller from './places-register.ctrl';

const PlacesRegisterComponent = {
  bindings: {
    onConfirm: '&'
  },
  template,
  controller
};

export default PlacesRegisterComponent;
