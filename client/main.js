import angular from 'angular';
import angularMeteor from 'angular-meteor';

import comigr from '../imports/components/comigr/comigr';

angular.module('comigr-app', [
    angularMeteor,
    comigr.name
]);
