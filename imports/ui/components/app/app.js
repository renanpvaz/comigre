import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './app.less';
import template from './app.html';

import navbar from '../navbar/index';
import auth from '../auth/index';
import placeTypeSelect from '../place-type-select/index';
import placeRegister from '../place-register/index';
import eventForm from '../event-form/index';
import jobForm from '../job-form/index';

class AppCtrl {
  constructor() { }
}

export default angular
  .module('app', [
    angularMeteor,
    uiRouter,
    navbar,
    auth,
    placeRegister,
    placeTypeSelect,
    eventForm,
    jobForm
  ])
  .component('app', {
    template,
    controller: AppCtrl
  })
  .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/cadastro');

    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app'
      });
  })
  .name;
