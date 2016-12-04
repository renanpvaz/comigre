import template from './place-position-select.html';
import controller from './place-position-select.ctrl';

const PlacePositionSelectComponent = {
  bindings: {
    onConfirm: '&'
  },
  template,
  controller
};

export default PlacePositionSelectComponent;
