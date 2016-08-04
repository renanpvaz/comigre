import template from './sidebar.html';
import controller from './sidebar.ctrl';

let sidebarComponent = {
  restrict: 'E',
  bindings: {
    expanded: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default sidebarComponent;
