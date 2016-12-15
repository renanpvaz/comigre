import assign from 'angular-assign';
import { Places } from '../../../api/places/collection';

class PlacesListCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.$reactive(this).attach(this.$scope);
    const handle = this.subscribe('userPlaces', () => {}, {
      onStart() {
        this.places = Places.find().fetch();
      }
    });

    this.$scope.$watch('$ctrl.places', () => {
      if (this.places.length) {
        handle.stop();
      }
    });
  }
}

export default PlacesListCtrl;
