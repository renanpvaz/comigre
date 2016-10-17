import assign from 'angular-assign';

import { Guides } from '../../../api/guides/collection';

class GuidesListCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    assign(arguments).to(this);
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

export default GuidesListCtrl;
