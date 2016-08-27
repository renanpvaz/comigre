'use strict';

import template from './placeDetail.html';
import controller from './placeDetail.ctrl';
import './placeDetail.less';

const placeDetailComponent = {
  restrict: 'E',
  bindings: { id: '=id'},
  template,
  controller,
  controllerAs: 'vm'
};

export default placeDetailComponent;
