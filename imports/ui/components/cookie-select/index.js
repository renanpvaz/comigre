import angular from 'angular';

import cookieSelectComponent from './cookie-select.component';
import './cookie-select.less';

const cookieSelect = angular
  .module('cookieSelect', [])
  .component('cookieSelect', cookieSelectComponent)
  .name;

export default cookieSelect;
