import assign from 'angular-assign';

class PlaceRegisterCtrl {
  constructor($state, $rootScope) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.place = {};
    this.step = 1;
    this.breadcrumbs = [];
  }

  handleConfirmStep($event) {
    this.step++;
    Object.assign(this.place, $event);
  }

  handleBackStep($event) {
    this.step--;
    Object.assign(this.place, $event);
  }
}

export default PlaceRegisterCtrl;
