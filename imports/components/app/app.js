import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './app.less';
import template from './app.html';

import sidebar from '../sidebar/index';
import navbar from '../navbar/index';
import places from '../places/index';
import eventsRegister from '../events-register/index';
import guides from '../guides/index';

class AppCtrl {
  constructor() { }
}

export default angular
  .module('app', [
    angularMeteor,
    uiRouter,
    places,
    sidebar,
    navbar,
    eventsRegister,
    guides
  ])
  .component('app', {
    template,
    controller: AppCtrl
  })
  .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/locais');

    $stateProvider
      .state('app', {
        redirectTo: 'places',
        url: '/app',
        component: 'app'
      });
  })
  .name;
