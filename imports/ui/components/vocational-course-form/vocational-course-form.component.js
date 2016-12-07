import template from './vocational-course-form.html';
import controller from './vocational-course-form.ctrl';

const VocationalCourseFormComponent = {
  bindings: {
    onValid: '&'
  },
  template,
  controller
};

export default VocationalCourseFormComponent;
