'use strict';

import template from './placesDetail.html';
import controller from './placesDetail.ctrl';
import './placesDetail.less';

const placesDetailComponent = {
  bindings: {
    id: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default placesDetailComponent;
