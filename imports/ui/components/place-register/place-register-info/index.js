import angular from 'angular';

import placeRegisterInfoComponent from './place-register-info.component';

import jobForm from '../../job-form';
import portugueseClass from '../../portuguese-class-form';
import residenceForm from '../../residence-form';
import eventForm from '../../event-form';
import vocationalCourseForm from '../../vocational-course-form';

const placeRegisterInfo = angular
  .module('placeRegisterInfo', [
    jobForm,
    residenceForm,
    eventForm,
    portugueseClass,
    vocationalCourseForm
  ])
  .component('placeRegisterInfo', placeRegisterInfoComponent)
  .name;

export default placeRegisterInfo;
