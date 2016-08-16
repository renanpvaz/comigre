import template from './sidebar.html';
import controller from './sidebar.ctrl';

let sidebarComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'vm'
};

export default sidebarComponent;
