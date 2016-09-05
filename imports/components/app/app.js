'use strict';

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './app.less';
import template from './app.html';

import sidebar from '../sidebar/sidebar';
import navbar from '../navbar/navbar';
import places from '../places/index';

const name = 'app';

class AppCtrl {
  constructor() { }
}

export default angular
  .module(name, [
    angularMeteor,
    places,
    sidebar.name,
    navbar.name
  ])
  .component(name, {
    template,
    controller: AppCtrl
  });
