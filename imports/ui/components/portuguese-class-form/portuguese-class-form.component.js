import template from './portuguese-class-form.html';
import controller from './portuguese-class-form.ctrl';

const PortugueseClassFormComponent = {
  bindings: {
    onValid: '&'
  },
  template,
  controller
};

export default PortugueseClassFormComponent;
