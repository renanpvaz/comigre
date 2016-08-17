import { Institutions } from '../../api/institutions.js';

class mapCtrl {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.places = [];

    this.helpers({
      institutions() {
        let institutions = Institutions.find().fetch();

        return this.places.concat(institutions);
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
              result.forEach((place) => this.institutions.push({
                message: place.name,
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng
              }));
            }
          });
      });
    }
  }
}

export default mapCtrl;
