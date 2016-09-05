'use strict';

import { Places } from '../../api/places/places.js';
import Injectable from '../../common/injectable';

class PlacesService extends Injectable {
  constructor($mdToast, $window) {
    'ngInject';

    super(...arguments);

    this.center = {};
  }

  findGeolocation(center) {
    if ('geolocation' in this.$window.navigator) {
      const self = this;

      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      const toast = this.$mdToast.simple()
        .position('bottom left')
        .hideDelay(3000);

      const { error, success } = {
        error(err) {
          const errorToast = toast
            .textContent('Erro ao localizar, tentando novamente')
            .highlightAction(true);

          self.$mdToast.show(errorToast)
            .then(res => self.findGeolocation(center));
        },

        success(position) {
          const { latitude, longitude } = position.coords;
          const successToast = toast.textContent('Localização obtida');

          center.lat = latitude;
          center.lng = longitude;
          center.zoom = 15;
          self.center = center;

          self.$mdToast.show(successToast);
        }
      };

      this.$window.navigator.geolocation
        .getCurrentPosition(success, error, options);
    }
  }

  getNewPlaces(places, filter) {
    Meteor.call('getPlacesFromGoogle', this.center, filter.types,
      (error, result) => {
        if (!error) {

          result.forEach((gPlace) => {
            const isInCollection = places
              .some(i => i.googleId === gPlace.place_id); // jshint ignore:line

            if (!isInCollection) {
              Places.insert({
                message: gPlace.name,
                googleId: gPlace.place_id, // jshint ignore:line
                lat: gPlace.geometry.location.lat,
                lng: gPlace.geometry.location.lng,
                types: gPlace.types
              });
            }
          });

        } else {
          throw error;
        }
      });
  }
}

export default PlacesService;
