'use strict';

import angular from 'angular';
import ngMaterial from 'angular-material';
import sidebarComponent from './sidebar.component';

const name = 'sidebar';

const sidebarModule = angular.module(name, [
  ngMaterial
])

.component(name, sidebarComponent)

.config(($mdThemingProvider) => {
  'ngInject';

  const customPrimary = {
        '50': '#0084c1',
        '100': '#0073a8',
        '200': '#00618e',
        '300': '#005075',
        '400': '#003e5b',
        '500': '#1C1A32', // toolbar
        '600': '#001c28',
        '700': '#000a0f',
        '800': '#fff',
        '900': '#fff',
        'A100': '#0095db',
        'A200': '#00a7f4',
        'A400': '#0fb3ff',
        'A700': '#fff'
    };

    $mdThemingProvider
        .definePalette('customPrimary', customPrimary);

    const customAccent = {
        '50': '#000a08',
        '100': '#00231d',
        '200': '#003d31',
        '300': '#005646',
        '400': '#00705a',
        '500': '#00896f',
        '600': '#00bc97',
        '700': '#00d6ac',
        '800': '#00efc0',
        '900': '#0affcf',
        'A100': '#00bc97',
        'A200': '#fff', // text
        'A400': '#00896f',
        'A700': '#23ffd4'
    };
    $mdThemingProvider
        .definePalette('customAccent', customAccent);

    const customWarn = {
        '50': '#ffb280',
        '100': '#ffa266',
        '200': '#ff934d',
        '300': '#ff8333',
        '400': '#ff741a',
        '500': '#ff6400',
        '600': '#e65a00',
        '700': '#cc5000',
        '800': '#b34600',
        '900': '#993c00',
        'A100': '#ffc199',
        'A200': '#ffd1b3',
        'A400': '#ffe0cc',
        'A700': '#803200'
    };
    $mdThemingProvider
        .definePalette('customWarn', customWarn);

    const customBackground = {
        '50': '#0084c1',
        '100': '#0073a8',
        '200': '#00618e',
        '300': '#005075',
        '400': '#003e5b',
        '500': '#1C1A32',
        '600': '#001c28',
        '700': '#000a0f',
        '800': '#fff',
        '900': '#fff',
<<<<<<< HEAD
        'A100': '#1b1931', // Content
=======
        'A100': '#1C1A32', // Content
>>>>>>> 6ab12147558259936098c21f95c3bf7adc69c15b
        'A200': '#00a7f4',
        'A400': '#0fb3ff',
        'A700': '#fff'
    };

    $mdThemingProvider
        .definePalette('customBackground', customBackground);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground');
});

export default sidebarModule;
