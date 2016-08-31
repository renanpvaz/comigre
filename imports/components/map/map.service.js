import { Places } from '../../api/places/places.js';

class MapService {
  constructor() {
    'ngInject';

    this.center = {};
  }

  findGeolocation(center) {
    if ('geolocation' in navigator) {
      const error = (error) => console.log(error);
      const success = (position) => {
        const { latitude, longitude } = position.coords;

        center.lat = latitude;
        center.lng = longitude;
        center.zoom = 15;

        this.center = center;
      };
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation
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

            console.log(result);

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


export default MapService;
