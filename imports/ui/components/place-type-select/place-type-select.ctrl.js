class PlaceTypeSelectCtrl {
  constructor() {
    'ngInject';
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
