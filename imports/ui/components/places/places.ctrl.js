'use strict';

import assign from 'angular-assign';
import { Places } from '../../../api/places/collection';

class PlacesCtrl {
  constructor($scope, $reactive, PlacesService, $stateParams, $timeout) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.$reactive(this).attach(this.$scope);

    this.types = [];
    this.mapCenter = {
      lat: -15.893,
      lng: -52.2599,
      zoom: 5
    };

    this.subscribe('nearbyPlaces', () => [this.getReactively('mapCenter')]);

    this.PlacesService.findGeolocation(this.mapCenter, (lat, lng) => {
      this.mapCenter = { zoom: 15, lat, lng };
    });

    this.helpers({
      places() {
        return Places.find({
          types: {
            $in: this.getReactively('types')
          }
        });
      },

      place() {
        return Places.findOne({
          _id: this.$stateParams.id
        });
      }
    });
  }

  onFilter(filter) {
    this.types = filter.types;
    this.PlacesService.getNewPlaces(filter);
  }
}

export default PlacesCtrl;
