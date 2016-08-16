import { Institutions } from '../../api/institutions.js';

class mapCtrl {
  constructor(uiGmapIsReady, $scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.places = [];

    this.helpers({
      institutions() {
        return Institutions.find({});
      }
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.map = {
          center: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          zoom: 15
        };
      });
    }

    uiGmapIsReady.promise().then(() => {
      Meteor.call('getPlaces', this.map.center, 100,
      (error, result) => {

        if (!error) {
          this.places = result.map((place, i) => ({
            id: i,
            location: {
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng
            }
          }));
        }
      });
    });
  }
}

export default mapCtrl;
