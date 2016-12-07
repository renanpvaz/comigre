import template from './place-register-confirm.html';
import controller from './place-register-confirm.ctrl';

const PlaceRegisterConfirmComponent = {
  bindings: {
    place: '<',
    onConfirm: '&'
  },
  template,
  controller
};

export default PlaceRegisterConfirmComponent;
