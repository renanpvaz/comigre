import template from './place-register-position.html';
import controller from './place-register-position.ctrl';

const PlaceRegisterPositionComponent = {
  bindings: {
    onConfirm: '&'
  },
  template,
  controller
};

export default PlaceRegisterPositionComponent;
