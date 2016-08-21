import template from './sidebar.html';
import controller from './sidebar.ctrl';

const sidebarComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'vm'
};

export default sidebarComponent;
