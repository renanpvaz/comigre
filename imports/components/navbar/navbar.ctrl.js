import { Meteor } from 'meteor/meteor';
import assign from 'angular-assign';

class NavbarCtrl {
  constructor($timeout, $mdMedia) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.open = false;
  }

  toggleProfileDropdown(){
    this.open = !this.open;
  }

  isLoggedIn() {
    return !!Meteor.userId();
  }

  getUser() {
    return Meteor.user();
  }

  logout(){
    return Meteor.logout();
  }
}

export default NavbarCtrl;
