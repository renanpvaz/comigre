class PlaceRegisterInfoCtrl {
  constructor($scope, placeTypes) {
    'ngInject';

    Object.assign($scope, placeTypes);
  }

  $onInit() {
    console.log(this);
  }
}

export default PlaceRegisterInfoCtrl;
