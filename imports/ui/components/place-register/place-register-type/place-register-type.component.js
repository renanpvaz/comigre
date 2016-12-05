import template from './place-register-type.html';
import controller from './place-register-type.ctrl';

const PlaceRegisterTypeComponent = {
  bindings: {
    onConfirm: '&',
    onBack: '&',
    selectedStreet: '<'
  },
  template,
  controller
};

export default PlaceRegisterTypeComponent;
