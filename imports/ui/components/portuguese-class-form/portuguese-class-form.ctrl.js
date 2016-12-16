import { PORTUGUESE_CLASS } from '../../config';
import $emit from 'ng-emit';

class PortugueseClassFormCtrl {
  constructor($scope) {
    'ngInject';

    this.$scope = $scope;
  }

  $onInit() {
    this.portugueseClass = {};

    this.$scope.$watch('form.$valid', (valid) => {
      if (valid && Object.keys(this.portugueseClass).length) {
        $emit(this.onValid, { [PORTUGUESE_CLASS]: this.portugueseClass });
      }
    });
  }
}

export default PortugueseClassFormCtrl;
