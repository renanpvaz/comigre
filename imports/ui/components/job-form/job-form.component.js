import template from './job-form.html';
import controller from './job-form.ctrl';

const JobFormComponent = {
  bindings: {
    onValid: '&'
  },
  template,
  controller
};

export default JobFormComponent;
