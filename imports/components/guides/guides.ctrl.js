import assign from 'angular-assign';

import { Guides } from '../../api/guides/collection';

class GuidesCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.$reactive(this).attach(this.$scope);

    this.subscribe('allGuides');
  }
}

export default GuidesCtrl;
