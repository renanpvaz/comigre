class TypeIconCtrl {
  constructor($scope, placeTypes) {
    'ngInject';

    Object.assign($scope, placeTypes);
  }
}

export default TypeIconCtrl;
