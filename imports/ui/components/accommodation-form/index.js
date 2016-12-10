import angular from 'angular';

import accommodationFormComponent from './accommodation-form.component';
import './accommodation-form.less';

import cookieSelect from '../cookie-select';

const accommodationForm = angular
  .module('accommodationForm', [
    cookieSelect
  ])
  .component('accommodationForm', accommodationFormComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('accommodationform', {
        url: '^/cadastro-moradia',
        parent: 'app',
        component: 'accommodationForm'
      });
  })
  .name;

export default accommodationForm;
