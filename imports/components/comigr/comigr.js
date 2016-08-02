import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './comigr.less';
import template from './comigr.html';

import sidebar from '../sidebar/sidebar';
import map from '../crMap/crMap';

const name = 'comigr';

class Comigr {}

export default angular.module(name, [
  angularMeteor,
  sidebar.name,
  map.name
])

.component(name, {
  template,
  controller: Comigr,
  controllerAs: 'vm'
})

.config((uiGmapGoogleMapApiProvider) => {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBMNCRPFu5EiTK3rudC9EqdqD3Fg4cgxBU',
    libraries: 'places,geometry'
  });
});
