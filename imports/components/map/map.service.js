import { Places } from '../../api/places/places.js';

class MapService {
  constructor($mdToast) {
    'ngInject';

    this.center = {};
    this.$mdToast = $mdToast;
  }

  findGeolocation(center) {
    if ('geolocation' in navigator) {
      const toastService = this.$mdToast;
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      const toast = this.$mdToast.simple()
        .position('top right')
        .hideDelay(3000);

      function error(err) {
        const errorToast = toast.textContent('Erro ao localizar')
          .action('Tentar novamente')
          .highlightAction(true);

        toastService.show(errorToast).then(res => {
          if (res === 'ok') {
            this.findGeolocation(center);
          }
        })
      }

      function success(position) {
        const { latitude, longitude } = position.coords;
        const successToast = toast.textContent('Localização obtida');

        center.lat = latitude;
        center.lng = longitude;
        center.zoom = 15;
        this.center = center;

        toastService.show(successToast);
      }

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
