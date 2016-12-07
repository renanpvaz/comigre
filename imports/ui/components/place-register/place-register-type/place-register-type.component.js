import template from './place-register-type.html';
import controller from './place-register-type.ctrl';

const PlaceRegisterTypeComponent = {
  bindings: {
    onConfirm: '&',
    onBack: '&',
    address: '<'
  },
  template,
  controller
};

export default PlaceRegisterTypeComponent;
