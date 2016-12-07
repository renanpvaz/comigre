import template from './place-register-info.html';
import controller from './place-register-info.ctrl';

const PlaceRegisterInfoComponent = {
  bindings: {
    type: '<',
    onConfirm: '&'
  },
  template,
  controller
};

export default PlaceRegisterInfoComponent;
