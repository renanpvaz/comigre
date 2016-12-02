import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './app.less';
import template from './app.html';

import navbar from '../navbar';
import auth from '../auth';
import placeTypeSelect from '../place-type-select';
import placeRegister from '../place-register';
import eventForm from '../event-form';
import jobForm from '../job-form';
import vocationalCourseForm from '../vocational-course-form';
import portugueseClassForm from '../portuguese-class-form';
import placeRegisterConfirm from '../place-register-confirm';
import residenceForm from '../residence-form';
import placesList from '../places-list';

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
    jobForm,
    vocationalCourseForm,
    portugueseClassForm,
    placeRegisterConfirm,
    residenceForm,
    placesList
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
