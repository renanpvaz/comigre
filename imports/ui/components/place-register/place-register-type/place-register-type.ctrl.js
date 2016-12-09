import assign from 'angular-assign';
import $emit from 'ng-emit';

class PlaceTypeSelectCtrl {
  constructor(placeTypes) {
    'ngInject';

    assign(arguments).to(this);

    this.types = placeTypes;
  }

  confirm() {
    $emit(this.onConfirm, { type: this.type });
  }

  goBack() {
    $emit(this.onBack, { type: null });
  }
}

export default PlaceTypeSelectCtrl;
