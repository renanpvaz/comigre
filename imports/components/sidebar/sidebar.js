import angular from 'angular';
import ngMaterial from 'angular-material';
import sidebarComponent from './sidebar.component';

const name = 'sidebar';

let sidebarModule = angular.module(name, [
  ngMaterial
])

.component(name, sidebarComponent);

export default sidebarModule;
