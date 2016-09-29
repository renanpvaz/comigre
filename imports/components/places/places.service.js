'use strict';

import angular from 'angular';

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
      const fab = angular.element('places-filter md-fab-trigger > .md-fab');
      const removeClass = () => setTimeout(() => fab.removeClass('raised'), 3500);
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

          console.log(err);

          fab.addClass('raised');
          self.$mdToast.show(errorToast)
            .then(res => self.findGeolocation(center, callback));
          removeClass();
        },

        success(position) {
          const { latitude, longitude } = position.coords;
          const successToast = toast.textContent('Localização obtida');

          self.center = {
            lat: latitude,
            lng: longitude
          };

          fab.addClass('raised');
          self.$mdToast.show(successToast);
          removeClass();

          return callback(latitude, longitude);
        }
      };

      this.$window.navigator.geolocation
        .getCurrentPosition(success, error, options);
    }
  }

  getNewPlaces(filter) {
    Meteor.call('getPlacesFromGoogle', this.center, filter.types,
      (error, result) => {
        if (!error) {

          result.forEach((gPlace) => {
            const { lat, lng } = gPlace.geometry.location;
            const isInCollection = !!Places
              .find({ googleId: gPlace.place_id }) // jshint ignore:line
              .fetch()
              .length;

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
