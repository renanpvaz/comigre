import angular from 'angular';
import '/node_modules/angular-content-editable/dist/angular-content-editable.min';

import placeRegisterI18nComponent from './place-register-i18n.component';

import './place-register-i18n.less';

const placeRegisterI18n = angular
  .module('placeRegisterI18n', [
    'angular-content-editable'
  ])
  .component('placeRegisterI18n', placeRegisterI18nComponent)
  .config((contentEditableProvider) => {
    'ngInject';

    contentEditableProvider.configure({
      focusSelect: false
    });
  })
  .name;

export default placeRegisterI18n;
