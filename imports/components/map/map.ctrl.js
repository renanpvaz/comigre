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
      zoomControl: !$mdMedia('xs'),
      tileLayerOptions: {
        detectRetina: $mdMedia('xs')
      }
    };

    this.helpers({
      places() {
        return Places.find().fetch()
          .filter(place => {
            if(place.types) {
              return place.types
                .some(t => this.filter.types.includes(t));
            } else {
              return false;
            }
          });
      }
    });

    $scope.$watch('vm.filter', (val) => {
      if (val && this.center.zoom >= 10) {
        this.getNewPlaces();
      }
    });

    // TODO: timeout and error parameter
    if ('geolocation' in navigator) {
      const error = (error) => console.log(error);
      const success = (position) => {
        const { latitude, longitude } = position.coords;

        $scope.$apply(() => {
          this.center.lat = latitude;
          this.center.lng = longitude;
          this.center.zoom = 15;
        });

        this.places.push({
          lat: latitude,
          lng: longitude,
          message: 'Você está aqui',
          focus: true
        });

        this.getNewPlaces();
      };
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }

  getNewPlaces() {
    Meteor.call('getPlacesFromGoogle', this.center, this.filter.types,
      (error, result) => {

        if (!error) {

          result.forEach((gPlace) => {
            const isInCollection = this.places
              .some(i => i.googleId === gPlace.place_id); // jshint ignore:line

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

export default MapCtrl;
