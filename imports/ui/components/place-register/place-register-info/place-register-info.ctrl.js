class PlaceRegisterInfoCtrl {
  constructor(placeTypes) {
    'ngInject';

    this.types = placeTypes;
  }

  $onInit() {
    console.log(this);
  }
}

export default PlaceRegisterInfoCtrl;
