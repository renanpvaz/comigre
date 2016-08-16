import { Institutions } from '../../api/institutions.js';

class mapCtrl {
  constructor(uiGmapIsReady, $scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.map = {
      center: {
        latitude: -10.1689,
        longitude: -48.3317
      },
      zoom: 5
    };

    this.places = [];
    this.control = {};

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
            if (this.places.length && this.control) {
              this.control.newModels(this.places);
            }
          });
        });
      });
    }
  }
}

export default mapCtrl;
