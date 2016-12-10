import template from './accommodation-form.html';
import controller from './accommodation-form.ctrl';

const ResidenceFormComponent = {
  bindings: {
    onValid: '&'
  },
  template,
  controller
};

export default ResidenceFormComponent;
