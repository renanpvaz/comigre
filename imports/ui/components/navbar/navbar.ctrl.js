import { Meteor } from 'meteor/meteor';

class NavbarCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.dropdownIsOpen = false;
  }

  toggleDropdown() {
    if (this.isLoggedIn()) {
      this.dropdownIsOpen = !this.dropdownIsOpen;
    }
  }

  isLoggedIn() {
    return !!Meteor.userId();
  }

  getUser() {
    return Meteor.user();
  }

  logout() {
    return Meteor.logout();
  }
}

export default NavbarCtrl;
