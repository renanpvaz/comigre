'use strict';

class NavbarCtrl {
  constructor($mdSidenav, $timeout) {
    'ngInject';

    $timeout(() => $mdSidenav('sidebar').close());

    this.name = 'navbar';
    this.$mdSidenav = $mdSidenav;
  }

  toggleMenu() {
    this.$mdSidenav('sidebar').toggle();
  }
}

export default NavbarCtrl;
