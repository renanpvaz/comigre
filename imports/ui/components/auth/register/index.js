import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';

import registerComponent from './register.component';
import './register.less';

const register = angular
  .module('auth.register', [
    uiRouter,
    ngMessages
  ])
  .component('register', registerComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('register', {
        url: '^/criar-conta',
        parent: 'auth',
        component: 'register'
      });
  })
  .name;

export default register;
