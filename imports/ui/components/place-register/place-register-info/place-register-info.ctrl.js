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
    this.onConfirm({
      $event: {
        info: this.info
      }
    });
  }
}

export default PlaceRegisterInfoCtrl;
