import template from './map.html';
import controller from './map.ctrl';
import './map.less';

const mapComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default mapComponent;
