class PlaceRegisterI18nCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.original = {
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
       ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
       velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };

    this.i18n = {};
    this.active = -1;
    this.langs = [
      { title: 'Espanhol', code: 'es' },
      { title: 'Francês', code: 'fr' },
      { title: 'Inglês', code: 'en' }
    ];
  }

  confirm() {
    console.log(this.i18n);
  }
}

export default PlaceRegisterI18nCtrl;
