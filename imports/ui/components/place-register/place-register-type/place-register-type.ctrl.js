class PlaceTypeSelectCtrl {
  constructor(placeTypes) {
    'ngInject';

    this.types = placeTypes;
  }

  $onInit() {

  }

  confirm() {
    this.onConfirm({
      $event: {
        type: this.type,
      }
    });
  }

  goBack() {
    this.onBack({
      $event: {
        type: null,
      }
    });
  }
}

export default PlaceTypeSelectCtrl;
