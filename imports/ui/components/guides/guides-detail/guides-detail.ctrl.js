import assign from 'angular-assign';

import { Guides } from '../../../../api/guides/collection.js';

class GuidesDetailCtrl {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.$reactive(this).attach(this.$scope);
    console.log(this.$stateParams.id);

    this.helpers({
      guide() {
        return Guides.findOne({
          _id: this.getReactively('$stateParams.id')
        });
      }
    });
  }
}

export default GuidesDetailCtrl;
