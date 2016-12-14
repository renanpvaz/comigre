import { Meteor } from 'meteor/meteor';

class PlaceRegisterCtrl {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.place = {};
    this.step = 0;
    this.breadcrumbs = [
      { order: 0, text: 'Seleção de local'},
      { order: 1, text: 'Seleção do tipo'},
      { order: 2, text: 'Informações'},
      { order: 3, text: 'Confirmação'}
    ];

    this.updateBreadcrumb();
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
}

export default PlaceRegisterCtrl;
