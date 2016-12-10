import template from './cookie-select.html';
import controller from './cookie-select.ctrl';

const CookieSelectComponent = {
  bindings: {
    options: '<',
    onSelect: '&'
  },
  template,
  controller
};

export default CookieSelectComponent;
