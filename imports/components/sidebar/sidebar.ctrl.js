class SidebarCtrl {

  constructor() {
    this.expanded = false;
    this.name = 'sidebar';

    this.sections = [
      { name:'Trabalhos', icon: 'work' },
      { name:'Instituições', icon: 'account_balance' },
      { name:'Eventos', icon: 'event' },
      { name:'Cursos', icon: 'school' }
    ];
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}

export default SidebarCtrl;
