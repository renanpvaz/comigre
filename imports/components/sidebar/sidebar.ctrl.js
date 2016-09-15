'use strict';

import { Meteor } from 'meteor/meteor';
import Injectable from '../../common/injectable';

class SidebarCtrl extends Injectable {
  constructor($mdSidenav, $mdDialog, $rootElement, $scope, $mdMedia) {
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

  openLoginDialog(event) {
    this.$mdSidenav('sidebar').close();

    this.$mdDialog.show({
      template: `<login></login>`,
      parent: this.$rootElement,
      scope: this.$scope,
      preserveScope: true,
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('xs'),
      event
    });
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
}

export default SidebarCtrl;
