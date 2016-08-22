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
<<<<<<< HEAD
=======

   toggle() {
     this.expanded = !this.expanded;
  }
>>>>>>> 6ab12147558259936098c21f95c3bf7adc69c15b
}

export default SidebarCtrl;
