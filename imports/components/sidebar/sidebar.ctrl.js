import assign from 'angular-assign';

import { Meteor } from 'meteor/meteor';

class SidebarCtrl {
  constructor($mdSidenav, $scope, $mdMedia, $state) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.sections = [
      { name:'Mapa', icon: 'place', state: 'places' },
      { name:'Guia de informações', icon: 'book', state: 'guides.list' },
      { name:'Eventos', icon: 'event', state: 'event' }
    ];
  }

  goTo(stateName) {
    this.close();
    this.$state.go(stateName);
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
