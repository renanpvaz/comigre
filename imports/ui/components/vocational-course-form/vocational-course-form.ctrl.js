import { VOCATIONAL_COURSE } from '../../config';
import $emit from 'ng-emit';

class VocationalCourseFormCtrl {
  constructor($scope) {
    'ngInject';

    this.$scope = $scope;
  }

  $onInit() {
    this.vocationalCourse = {};

    this.$scope.$watch('form.$valid', (valid) => {
      if (valid && Object.keys(this.vocationalCourse).length) {
        $emit(this.onValid, { [VOCATIONAL_COURSE]: this.vocationalCourse });
      }
    });
  }
}

export default VocationalCourseFormCtrl;
