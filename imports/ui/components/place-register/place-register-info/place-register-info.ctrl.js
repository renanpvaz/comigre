class PlaceRegisterInfoCtrl {
  constructor($scope, placeTypes, $emit) {
    'ngInject';

    Object.assign($scope, placeTypes);

    this.types = placeTypes;
    this.$emit = $emit;
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
    this.$emit(this.onConfirm, { info: this.info });
  }
}

export default PlaceRegisterInfoCtrl;
