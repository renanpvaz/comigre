import angular from 'angular';

import portugueseClassFormComponent from './portuguese-class-form.component';
import './portuguese-class-form.less';

const portugueseClassForm = angular
  .module('portugueseClassForm', [])
  .component('portugueseClassForm', portugueseClassFormComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('portugueseclassform', {
        url: '^/cadastro-aula-portugues',
        parent: 'app',
        component: 'portugueseClassForm'
      });
  })
  .name;

export default portugueseClassForm;
