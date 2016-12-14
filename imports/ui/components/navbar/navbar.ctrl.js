import angular from 'angular';
import { Meteor } from 'meteor/meteor';
import assign from 'angular-assign';

class NavbarCtrl {
  constructor($window, $state) {
    'ngInject';

    console.log();

    assign(arguments).to(this);
  }

  $onInit() {
    const $nav = angular.element(
      this.$window.document.querySelector('nav')
    );

    this.dropdownIsOpen = false;

    angular.element(this.$window).bind('scroll', () => {
      if (this.$window.pageYOffset >= 60) {
        $nav.addClass('sticky');
      } else {
        $nav.removeClass('sticky');
      }
    });
  }

  isActive(state) {
    return this.$state.includes(state);
  }

  toggleDropdown() {
      this.dropdownIsOpen = !this.dropdownIsOpen;
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
