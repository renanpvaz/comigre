'use strict';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './main.less';

import app from '../imports/components/app/app';

angular.module('comigre', [
    angularMeteor,
    app,
    uiRouter
]);
