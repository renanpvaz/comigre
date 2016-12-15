import $emit from 'ng-emit';
import { Places } from '../../../api/places/collection';

class PlaceEditionCtrl {
  constructor($scope, placeTypes) {
    'ngInject';

    Object.assign($scope, placeTypes);

    this.types = placeTypes;
    console.log(this.types);
  }

  $onInit() {
    this.info = {};
  }

  handleValidity($event) {
    this.valid = true;
    this.info = $event[this.type];
    console.log(this.info);
  }

  confirm() {
    $emit(this.onConfirm, { info: this.info });
  }
}

export default PlaceEditionCtrl;
