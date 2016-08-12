'use strict';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import './app.less';
import template from './app.html';

import sidebar from '../sidebar/sidebar';
import map from '../map/map';
import jobRegister from '../jobRegister/jobRegister';

const name = 'app';

class AppCtrl {}

export default angular.module(name, [
  angularMeteor,
  sidebar.name,
  map.name,
  jobRegister.name
])

.component(name, {
  template,
  controller: AppCtrl,
  controllerAs: 'vm'
})

.config((uiGmapGoogleMapApiProvider) => {
  uiGmapGoogleMapApiProvider.configure({
    key: Meteor.settings.public.googlePlacesAPIKey,
    libraries: 'places,geometry'
  });
});
