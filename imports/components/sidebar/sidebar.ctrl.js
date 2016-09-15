'use strict';

import { Meteor } from 'meteor/meteor';

class SidebarCtrl {
  constructor($mdSidenav) {
    'ngInject';

    this.$mdSidenav = $mdSidenav;
  }

  $onInit() {
    this.sections = [
      { name:'Trabalhos', icon: 'work' },
      { name:'Instituições', icon: 'account_balance' },
      { name:'Eventos', icon: 'event' },
      { name:'Cursos', icon: 'school' }
    ];
  }

  onSwipeLeft() {
    this.$mdSidenav('sidebar').close();
  }

  isLoggedIn() {
    return !!Meteor.userId();
  }

  getUserEmail() {
    if (Meteor.user()) {
      return Meteor.user().emails[0].address;
    }
  }
}

export default SidebarCtrl;
