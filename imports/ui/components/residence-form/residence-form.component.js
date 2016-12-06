import template from './residence-form.html';
import controller from './residence-form.ctrl';

const ResidenceFormComponent = {
  bindings: {
    onValid: '&'
  },
  template,
  controller
};

export default ResidenceFormComponent;
