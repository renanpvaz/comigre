import angular from 'angular';

import jobFormComponent from './job-form.component';
import './job-form.less';

const jobForm = angular
  .module('jobForm', [])
  .component('jobForm', jobFormComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('jobform', {
        url: '^/cadastro-emprego',
        parent: 'app',
        component: 'jobForm'
      });
  })
  .name;

export default jobForm;
