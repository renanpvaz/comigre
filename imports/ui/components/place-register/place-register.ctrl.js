import assign from 'angular-assign';

class PlaceRegisterCtrl {
  constructor($state, $rootScope, $location) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.place = {};
    this.step = 0;
    this.steps = [
      'Mapa',
      'Tipo',
      'Informações'
    ];
  }

  getBreadcrumbs() {
    if (this.step > 0) {
      return this.steps.slice(0, this.step - 1).join(' > ');
    }
  }

  handleConfirmStep($event) {
    this.step++;
    this.$location.hash(this.steps[this.step].toLowerCase());
    Object.assign(this.place, $event);

    console.log(this.place);
  }

  handleBackStep($event) {
    this.step--;
    Object.assign(this.place, $event);
  }
}

export default PlaceRegisterCtrl;
