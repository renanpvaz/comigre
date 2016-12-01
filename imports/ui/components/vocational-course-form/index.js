import angular from 'angular';

import vocationalCourseFormComponent from './vocational-course-form.component';
import './vocational-course-form.less';

const vocationalCourseForm = angular
  .module('vocationalCourseForm', [])
  .component('vocationalCourseForm', vocationalCourseFormComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('vocationalcourseform', {
        url: '^/cadastro-curso-profissionalizante',
        parent: 'app',
        component: 'vocationalCourseForm'
      });
  })
  .name;

export default vocationalCourseForm;
