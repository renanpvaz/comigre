class SidebarController {

  constructor($mdSidenav, $log) {
    this.isSidenavOpen = false;
    this.name = 'sidebar';
    this.sections = ['Trabalhos', 'Instituições', 'Eventos'];
  }
}

export default SidebarController;
