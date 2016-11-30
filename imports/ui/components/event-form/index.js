import angular from 'angular';

import eventFormComponent from './event-form.component';
import './event-form.less';

const eventForm = angular
  .module('eventForm', [])
  .component('eventForm', eventFormComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('eventform', {
        url: '^/cadastro-evento',
        parent: 'app',
        component: 'eventForm'
      });
  })
  .name;

export default eventForm;
