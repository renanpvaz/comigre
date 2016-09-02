'use strict';

import Injectable from '../../common/injectable';

class NavbarCtrl extends Injectable {
  constructor($mdSidenav, $timeout, $mdMedia, $mdDialog) {
    'ngInject';

    super(...arguments);

    $timeout(() => $mdSidenav('sidebar').close());
  }

  toggleMenu() {
    this.$mdSidenav('sidebar').toggle();
  }
}

export default NavbarCtrl;
