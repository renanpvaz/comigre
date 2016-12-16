import { Meteor } from 'meteor/meteor';

class PlaceRegisterCtrl {
  constructor($state) {
    'ngInject';

    this.$state = $state;
  }

  $onInit() {
    this.place = {};
    this.step = 0;
    this.breadcrumbs = [
      { order: 0, text: 'Seleção de local'},
      { order: 1, text: 'Seleção do tipo'},
      { order: 2, text: 'Informações'},
      { order: 3, text: 'Traduções'},
      { order: 4, text: 'Confirmação'}
    ];

    this.updateBreadcrumb();
  }

  handleRegisterConfirmation() {
    if (this.place.info && this.place.i18n && this.place.availableLanguages) {
      this.register();
    }
  }

  handleConfirmStep($event) {
    this.step++;
    this.place = Object.assign({}, this.place, $event);
    this.updateBreadcrumb();
  }

  handleBackStep($event) {
    this.step--;
    Object.assign(this.place, $event);
    this.updateBreadcrumb();
  }

  updateBreadcrumb() {
    this.activeCrumb = this.breadcrumbs[this.step];
  }

  register() {
    const place = this.place;

    Meteor.call(`${place.type}.insert`, place.info, (error, _id) => {
      place.detailsId = _id;

      if (!error) {
        Meteor.call('places.insert', place, console.log);
        this.registerTranslations();
      }
    });
  }

  registerTranslations() {
    const languages = this.place.availableLanguages;

    if (!languages.length) {
      this.$state.go('places-list');
    }

    languages.forEach((language, index, arr) => {
      Meteor.call('translations.insert', place.i18n[language], language, (err) => {
        if (!err && index === arr.length - 1) {
          this.$state.go('places-list');
        }
      });
    });
  }
}

export default PlaceRegisterCtrl;
