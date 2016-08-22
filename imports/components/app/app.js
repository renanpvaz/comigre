'use strict';

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './app.less';
import template from './app.html';

import sidebar from '../sidebar/sidebar';
import navbar from '../navbar/navbar';
import placesFilter from '../placesFilter/placesFilter';
import map from '../map/map';

const name = 'app';

class AppCtrl {
  constructor() {
  }
}

export default angular.module(name, [
  angularMeteor,
  sidebar.name,
  map.name,
  placesFilter.name,
  navbar.name
])

.component(name, {
  template,
  controller: AppCtrl,
  controllerAs: 'vm'
});
