import template from './sidebar.html';
import controller from './sidebar.controller';
import './sidebar.css';

let sidebarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default sidebarComponent;
