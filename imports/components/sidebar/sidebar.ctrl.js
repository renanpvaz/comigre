'use strict';

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
}

export default SidebarCtrl;
