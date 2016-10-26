import angular from 'angular';

import { Places } from '../../api/places/collection.js';

class PlacesService {
  constructor($window) {
    'ngInject';

    this.$window = $window;
    this.center = {};
  }

  findGeolocation(center, callback) {
    if ('geolocation' in this.$window.navigator) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      const success = (position) => {
        const { latitude: lat, longitude: lng } = position.coords;
        this.center = { lat, lng };

        return callback(lat, lng);
      };

      this.$window.navigator.geolocation
        .getCurrentPosition(success, console.error, options);
    }
  }

  isSaved(id) {
    return !!Places
      .find({ googleId: id })
      .fetch()
      .length;
  }

  getNewPlaces(filter) {
    Meteor.call('getPlacesFromGoogle', this.center, filter.types,
      (error, result) => {
        result.forEach((gPlace) => {
          const { lat, lng } = gPlace.geometry.location;

          if (!this.isSaved(gPlace.place_id)) { // jshint ignore:line
            Places.insert({
              message: gPlace.name,
              googleId: gPlace.place_id, // jshint ignore:line
              lat, lng,
              types: gPlace.types
            });
          }
        });
      });
  }
}

export default PlacesService;
