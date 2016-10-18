'use strict';

import { Guides } from '../../../api/guides/collection.js';
import Injectable from '../../../common/injectable';

class GuidesDetailCtrl extends Injectable {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.$reactive(this).attach(this.$scope);

  this.helpers({
    guide() {
      return Guides.findOne({
        _id: this.$stateParams.id
      });
    }
  });
}

}
export default GuidesDetailCtrl;
