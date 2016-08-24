import { Places } from '../../api/places/places.js';

class MapCtrl {
  constructor($scope, $reactive, $mdMedia) {
    'ngInject';

    $reactive(this).attach($scope);

    this.center = {
      lat: -15.893,
      lng: -52.2599,
      zoom: 5
    };

    this.defaults = {
      zoomControlPosition: 'topright',
      zoomControl: !$mdMedia('xs')
    };

    this.helpers({
      places() {
        return Places.find().fetch()
          .filter(place => {
            return place.types
              .some(t => this.filter.types.includes(t))
          });
      }
    });

    $scope.$watch('vm.filter', (val) => {
      if (val) {
        this.getNewPlaces();
      }
    });

    // TODO: timeout and error parameter
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        $scope.$apply(() => {
          this.center.lat = position.coords.latitude;
          this.center.lng = position.coords.longitude;
          this.center.zoom = 15;
        });

        this.getNewPlaces();
      });
    }
  }

  getNewPlaces() {
    Meteor.call('getPlacesFromGoogle', this.center, this.filter.types,
      (error, result) => {

        if (!error) {

          result.forEach((gPlace) => {
            const isInCollection = this.places
              .some(i => i.googleId === gPlace.place_id);

            if (!isInCollection) {

              Places.insert({
                message: gPlace.name,
                googleId: gPlace.place_id,
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

export default MapCtrl;
