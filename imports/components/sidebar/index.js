'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';

import auth from '../auth/index';

import SidebarComponent from './sidebar.component';

const sidebar = angular
  .module('sidebar', [
    ngMaterial,
    auth
  ])
  .component('sidebar', SidebarComponent)
  .config(($mdThemingProvider) => {
    'ngInject';

    $mdThemingProvider.definePalette('light', {
      '50': 'ffffff',
      '100': 'ffffff',
      '200': 'ffffff',
      '300': 'ffffff',
      '400': 'ffffff',
      '500': 'ffffff',
      '600': 'ffffff',
      '700': 'ffffff',
      '800': 'ffffff',
      '900': 'ffffff',
      'A100': 'ffffff',
      'A200': 'ffffff',
      'A400': '1b1931',
      'A700': 'eeeeee'
    });

    $mdThemingProvider.definePalette('blue-purple', {
      '50': '1b1931',
      '100': '1b1931',
      '200': '1b1931',
      '300': '1b1931',
      '400': '1b1931',
      '500': '1b1931',
      '600': '1b1931',
      '700': '1b1931',
      '800': '1b1931',
      '900': '1b1931',
      'A100': '1b1931',
      'A200': '1b1931',
      'A400': '1b1931',
      'A700': 'ffffff'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('light', {
        'default': '50',
        'hue-1': 'A700',
        'hue-3': 'A400'
      })
      .accentPalette('teal')
      .warnPalette('pink')
      .backgroundPalette('blue-purple', {
        'default': '50',
        'hue-1': 'A700'
      });
  })
  .name;

export default sidebar;
