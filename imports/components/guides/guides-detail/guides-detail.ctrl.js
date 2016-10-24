import assign from 'angular-assign';

import { Guides } from '../../../api/guides/collection.js';

class GuidesDetailCtrl {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    assign(arguments).to(this);
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
