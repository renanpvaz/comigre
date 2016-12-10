import { Meteor } from 'meteor/meteor';
import assign from 'angular-assign';

class PlaceRegisterCtrl {
  constructor($state, $rootScope, $location, placeTypes) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.place = {};
    this.step = 0;
    this.steps = [
      { hash: 'mapa', text: 'Seleção de local' },
      { hash: 'tipo', text: 'Seleção do tipo' },
      { hash: 'informacoes', text: 'Informações' },
      { hash: 'confirmar', text: 'Confirmação' }
    ];

    this.breadcrumbs = [this.steps[0]];
  }

  handleRegisterConfirmation() {
    const place = this.place;

    Meteor.call(`${place.type}.insert`, place.info, (error, _id) => {
      place.detailsId = _id;

      if (!error) {
        Meteor.call('places.insert', place, console.log);
      }
    });
  }

  handleCrumbClick({ index }) {
    this.step = index;
  }

  handleConfirmStep($event) {
    this.step++;
    this.place = Object.assign({}, this.place, $event);

    this.breadcrumbs = [
      ...this.breadcrumbs,
      this.steps[this.step]
    ];
  }

  handleBackStep($event) {
    this.step--;
    Object.assign(this.place, $event);
    this.breadcrumbs.pop();
  }
}

export default PlaceRegisterCtrl;
