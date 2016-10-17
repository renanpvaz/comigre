import { Meteor } from 'meteor/meteor';
import assign from 'angular-assign';

class NavbarCtrl {
  constructor($mdSidenav, $timeout, $mdMedia) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.$timeout(() => this.$mdSidenav('sidebar').close());
  }

  toggleMenu() {
    this.$mdSidenav('sidebar').toggle();
  }
}

export default NavbarCtrl;
