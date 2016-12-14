import assign from 'angular-assign';
import { Places } from '../../../api/places/collection';

class PlacesListCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    assign (arguments).to(this);
  }

  $onInit() {
    this.$reactive(this).attach(this.$scope);
    this.subscribe('userPlaces', () => {}, {
      onStart() {
        this.places = Places.find().fetch();
        console.log(Places.find().fetch());
      }
    });
  }
}

export default PlacesListCtrl;
