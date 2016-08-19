import { Places } from '../../api/places.js';

class MapCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      places() {
        return Places.find().fetch();
      }
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            zoom: 10
        };

        Meteor.call('getPlacesFromGoogle', this.center, 1000,
          (error, result) => {
            if (!error) {
              result.forEach((gPlace) => {
                const isInCollection = this.places.some(i => {
                  return i.googleId === gPlace.place_id;
                });

                if (!isInCollection) {
                  Places.insert({
                    message: gPlace.name,
                    googleId: gPlace.place_id,
                    lat: gPlace.geometry.location.lat,
                    lng: gPlace.geometry.location.lng
                  });
                }
              });
            }
          });
      });
    }
  }
}

export default MapCtrl;
