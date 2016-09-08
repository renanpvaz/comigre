'use strict';

import { Places } from '../../api/places/places.js';
import Injectable from '../../common/injectable';

class PlacesService extends Injectable {
  constructor($mdToast, $window) {
    'ngInject';

    super(...arguments);

    this.center = {};
  }

  findGeolocation(center, callback) {
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
            .then(res => self.findGeolocation(center, callback));
        },

        success(position) {
          const { latitude, longitude } = position.coords;
          const successToast = toast.textContent('Localização obtida');

          callback(latitude, longitude);
          
          self.center = {
            lat: latitude,
            lng: longitude
          };

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
            const { lat, lng } = gPlace.geometry.location;
            const isInCollection = places
              .some(i => i.googleId === gPlace.place_id); // jshint ignore:line

            if (!isInCollection) {
              Places.insert({
                message: gPlace.name,
                googleId: gPlace.place_id, // jshint ignore:line
                lat,
                lng,
                loc : {
                  type: 'Point',
                  coordinates: [ lng, lat ]
                },
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
