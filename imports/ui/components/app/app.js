import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './app.less';
import template from './app.html';

import navbar from '../navbar';
import auth from '../auth';
import placeRegister from '../place-register';
import placesList from '../places-list';
import placeEdition from '../place-edition';

import * as types from '../../config';

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
    placesList,
    placeEdition
  ])
  .component('app', {
    template,
    controller: AppCtrl
  })
  .constant('placeTypes', types)
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
