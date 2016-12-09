import $emit from 'ng-emit';

class PlaceRegisterInfoCtrl {
  constructor($scope, placeTypes) {
    'ngInject';

    Object.assign($scope, placeTypes);

    this.types = placeTypes;
  }

  $onInit() {
    this.info = {};
  }

  handleValidity($event) {
    this.valid = true;

    switch (this.type) {
      case this.types.EVENT:
        this.info = $event.event;
        break;
    }
  }

  confirm() {
    $emit(this.onConfirm, { info: this.info });
  }
}

export default PlaceRegisterInfoCtrl;
