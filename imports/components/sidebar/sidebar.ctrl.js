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
      { name:'Mapa', icon: 'place', state: 'places' },
      { name:'Guia de informações', icon: 'book', state: 'guides.list' },
      { name:'Eventos', icon: 'event', state: 'event' }
    ];
  }

  close() {
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
