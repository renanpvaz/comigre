import template from './event-form.html';
import controller from './event-form.ctrl';

const EventFormComponent = {
  bindings: {
    onValid: '&'
  },
  template,
  controller
};

export default EventFormComponent;
