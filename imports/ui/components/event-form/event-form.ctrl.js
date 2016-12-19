import assign from 'angular-assign';
import $emit from 'ng-emit';

import { EVENT } from '../../config';

class EventFormCtrl {
  constructor($scope) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.event = {
      contact: {}
    };

    this.$scope.$watch('form.$valid', (valid) => {
      if (valid && Object.keys(this.event).length > 1) {
        $emit(this.onValid, { [EVENT]: this.event });
      }
    });
  }
}

export default EventFormCtrl;
