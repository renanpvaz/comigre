import assign from 'angular-assign';

class PlaceRegisterCtrl {
  constructor($state, $rootScope) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.place = {};
    this.breadcrumbs = [];
  }

  handleStepConfirm($event) {
    Object.assign(this.place, $event);
    console.log(this.place);
  }
}

export default PlaceRegisterCtrl;
