'use strict';

class NavbarCtrl {
  constructor($mdSidenav, $timeout, $mdMedia) {
    'ngInject';

    $timeout(() => $mdSidenav('sidebar').close());

    this.name = 'navbar';
    this.$mdSidenav = $mdSidenav;
    this.$mdMedia = $mdMedia;
  }

  toggleMenu() {
    this.$mdSidenav('sidebar').toggle();
  }
}

export default NavbarCtrl;
