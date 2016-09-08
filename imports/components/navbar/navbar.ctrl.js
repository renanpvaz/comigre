'use strict';

import { Meteor } from 'meteor/meteor';
import Injectable from '../../common/injectable';

class NavbarCtrl extends Injectable {
  constructor($mdSidenav, $timeout, $mdMedia, $rootElement, $scope, $mdDialog) {
    'ngInject';

    super(...arguments);
  }

  openLoginDialog(event) {
    this.$mdDialog.show({
      template: `<login></login>`,
      parent: this.$rootElement,
      scope: this.$scope,
      preserveScope: true,
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('xs'),
      event
    });
  }

  isLoggedIn() {
    return !!Meteor.userId();
  }

  $onInit() {
    this.$timeout(() => this.$mdSidenav('sidebar').close());
  }

  toggleMenu() {
    this.$mdSidenav('sidebar').toggle();
  }
}

export default NavbarCtrl;
