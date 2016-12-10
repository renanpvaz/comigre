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
      case this.types.JOB:
        this.info = $event.job;
        break;
      case this.types.ACCOMMODATION:
        this.info = $event.accommodation;
        break;
      case this.types.PORTUGUESE_CLASS:
        this.info = $event.portugueseClass;
        break;
      case this.types.VOCATIONAL_COURSE:
        this.info = $event.vocationalCourse;
        break;
    }
  }

  confirm() {
    $emit(this.onConfirm, { info: this.info });
  }
}

export default PlaceRegisterInfoCtrl;
