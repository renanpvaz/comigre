'use strict';

class NavbarCtrl {
  constructor($mdSidenav, $timeout, $mdMedia, $mdDialog) {
    'ngInject';

    $timeout(() => $mdSidenav('sidebar').close());

    this.name = 'navbar';
    this.$mdSidenav = $mdSidenav;
    this.$mdMedia = $mdMedia;
    this.$mdDialog = $mdDialog;
  }

  toggleMenu() {
    this.$mdSidenav('sidebar').toggle();
  }

  openMoreInfo(e) {
    this.$mdDialog
      .show(this.$mdDialog
        .alert()
        .title('More info goes here.')
        .textContent('Something witty.')
        .ariaLabel('More info')
        .ok('Got it')
        .targetEvent(e)
      );
  }
}

export default NavbarCtrl;
