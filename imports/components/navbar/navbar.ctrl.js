'use strict';

import { Meteor } from 'meteor/meteor';
import Injectable from '../../common/injectable';

class NavbarCtrl extends Injectable {
  constructor($mdSidenav, $timeout, $mdMedia) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.$timeout(() => this.$mdSidenav('sidebar').close());
  }

  toggleMenu() {
    this.$mdSidenav('sidebar').toggle();
  }
}

export default NavbarCtrl;
