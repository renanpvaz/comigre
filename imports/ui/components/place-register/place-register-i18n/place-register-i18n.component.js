import template from './place-register-i18n.html';
import controller from './place-register-i18n.ctrl';

const PlaceRegisterI18nComponent = {
  bindings: {
    original: '<',
    onConfirm: '&'
  },
  template,
  controller
};

export default PlaceRegisterI18nComponent;
