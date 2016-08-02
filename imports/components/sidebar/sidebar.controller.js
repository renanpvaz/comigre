class SidebarController {

  constructor($mdSidenav, $log) {
    this.expanded = false;
    this.name = 'sidebar';
    this.sections = [
      { name:'Trabalhos', icon: 'work' },
      { name:'Instituições', icon: 'account_balance' },
      { name:'Eventos', icon: 'event' }
    ];
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}

export default SidebarController;
