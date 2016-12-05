import template from './place-type-select.html';
import controller from './place-type-select.ctrl';

const PlaceTypeSelectComponent = {
  bindings: {
    onConfirm: '&',
    onBack: '&'
  },
  template,
  controller
};

export default PlaceTypeSelectComponent;
