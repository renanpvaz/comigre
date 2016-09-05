'use strict';

import Injectable from '../../common/injectable';
import { Places } from '../../api/places/places';

class PlacesCtrl extends Injectable {
  constructor($scope, $reactive, PlacesService) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.$reactive(this).attach(this.$scope);

    this.types = [];
    this.mapCenter = {
      lat: -15.893,
      lng: -52.2599,
      zoom: 5
    };

    this.PlacesService.findGeolocation(this.mapCenter);

    this.helpers({
      places() {
        return Places.find({
          types: {
            $in: this.getReactively('types')
          }
        }, { limit: 20 });
      }
    });
  }

  onFilter(filter) {
    this.types = filter.types;
    this.PlacesService.getNewPlaces(this.places, filter);
  }
}

export default PlacesCtrl;
