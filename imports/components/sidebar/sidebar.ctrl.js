'use strict';

import { Meteor } from 'meteor/meteor';
import Injectable from '../../common/injectable';

class SidebarCtrl extends Injectable {
  constructor($mdSidenav, $scope, $mdMedia, $location) {
    'ngInject';

    super(...arguments);
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

  getUser() {
    return Meteor.user();
  }

  logout(){
    return Meteor.logout();
  }
}

export default SidebarCtrl;
