import assign from 'angular-assign';

class PlaceTypeSelectCtrl {
  constructor(placeTypes, $emit) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.type = 0;
  }

  confirm() {
    this.$emit(this.onConfirm, { type: this.type });
  }

  goBack() {
    this.$emit(this.onBack, { type: null });
  }
}

export default PlaceTypeSelectCtrl;
