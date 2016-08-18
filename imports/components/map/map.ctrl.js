import { Institutions } from '../../api/institutions.js';

class mapCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.places = [];

    this.helpers({
      institutions() {
        return Institutions.find().fetch();
      }
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            zoom: 10
        };

        Meteor.call('getPlaces', this.center, 1000,
          (error, result) => {
            if (!error) {
              result.forEach((place) => {
                const isInCollection = this.institutions
                  .some(i => i.googleId === place.place_id);

                if (!isInCollection) {
                  Institutions.insert({
                    message: place.name,
                    googleId: place.place_id,
                    lat: place.geometry.location.lat,
                    lng: place.geometry.location.lng
                  });
                }
              });
            }
          });
      });
    }
  }
}

export default mapCtrl;
