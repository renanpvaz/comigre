'use strict';

import Injectable from '../../common/injectable';
import { Guides } from '../../api/guides/collection';

class GuidesCtrl extends Injectable {
  constructor($scope, $reactive) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.$reactive(this).attach(this.$scope);
    this.subscribe('allGuides');
    this.helpers({
      guides() {
        return Guides.find();
      }
    });
  }
}

export default GuidesCtrl;
