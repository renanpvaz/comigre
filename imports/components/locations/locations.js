'use strict';

import angular from 'angular';
import locationsComponent from './locations.component';

let locationsModule = angular.module('locations', [])

.component('locations', locationsComponent);

export default locationsModule;
