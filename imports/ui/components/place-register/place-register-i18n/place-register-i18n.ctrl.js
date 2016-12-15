import $emit from 'ng-emit';

class PlaceRegisterI18nCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.available = [];
    this.active = -1;
    this.i18n = {};
    this.langs = [
      { title: 'Espanhol', code: 'es' },
      { title: 'Francês', code: 'fr' },
      { title: 'Inglês', code: 'en' }
    ];
  }

  $onChanges() {
    if (this.original) {
      this.i18n = {
        es: Object.assign({}, this.original),
        fr: Object.assign({}, this.original),
        en: Object.assign({}, this.original)
      };
    }
  }

  hasChanged(languageCode) {
    if (!this.original) return;

    const availableIndex = this.available.indexOf(languageCode);
    const translated = this.i18n[languageCode];
    const changed = translated.name !== this.original.name
      || translated.description !== this.original.description;

    if (changed) {
      if (!this.available[availableIndex]) {
        this.available.push(languageCode);
      }
    } else if(availableIndex > -1) {
      this.available.splice(availableIndex, 1);
    }

    return changed;
  }

  confirm() {
    $emit(this.onConfirm, {
      i18n: this.i18n,
      availableLanguages: this.available
    });
  }
}

export default PlaceRegisterI18nCtrl;
