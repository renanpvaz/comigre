class SidebarCtrl {

  constructor() {
    this.open = false;
    this.name = 'sidebar';

    this.sections = [
      { name:'Trabalhos', icon: 'work' },
      { name:'Instituições', icon: 'account_balance' },
      { name:'Eventos', icon: 'event' },
      { name:'Cursos', icon: 'school' }
    ];
  }
}

export default SidebarCtrl;
