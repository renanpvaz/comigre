import angular from 'angular';

import residenceFormComponent from './residence-form.component';
import './residence-form.less';

const residenceForm = angular
  .module('residenceForm', [])
  .component('residenceForm', residenceFormComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('residenceform', {
        url: '^/cadastro-moradia',
        parent: 'app',
        component: 'residenceForm'
      });
  })
  .name;

export default residenceForm;
