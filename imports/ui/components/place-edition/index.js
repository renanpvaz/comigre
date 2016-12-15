import angular from 'angular';

import placeEditionComponent from './place-edition.component';

import jobForm from '../job-form';
import portugueseClass from '../portuguese-class-form';
import accommodationForm from '../accommodation-form';
import eventForm from '../event-form';
import vocationalCourseForm from '../vocational-course-form';

const placeEdition = angular
  .module('placeEdition', [
    jobForm,
    accommodationForm,
    eventForm,
    portugueseClass,
    vocationalCourseForm
  ])
  .component('placeEdition', placeEditionComponent)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('place-edition', {
        url: '^/editar-local/{id}?type',
        parent: 'app',
        component: 'placeEdition'
      });
  })
  .name;

export default placeEdition;
