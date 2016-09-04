import { Places } from '../../api/places/places.js';
import Injectable from '../../common/injectable';

class MapCtrl extends Injectable {
  constructor($scope, $reactive, $mdMedia, MapService, $mdDialog, leafletData) {
    'ngInject';

    super(...arguments);

    $reactive(this).attach($scope);

    this.types = [];

    this.helpers({
      places() {
        return Places.find({
          types: {
            $in: this.getReactively('types')
          }
        });
      }
    });
  }

  $onInit() {
    this.$scope.$on('leafletDirectiveMarker.click',
      (event, args) => {
        this.openDetails(event, args);
      });

    this.center = {
      lat: -15.893,
      lng: -52.2599,
      zoom: 5
    };

    this.MapService.findGeolocation(this.center);

    this.defaults = {
      zoomControlPosition: 'topright',
      zoomControl: !this.$mdMedia('xs'),
      tileLayerOptions: {
        detectRetina: this.$mdMedia('xs')
      }
    };
<<<<<<< HEAD

    this.helpers({
      places() {
        return Places.find().fetch()
          .filter(place => {
            if(place.types) {
              return place.types
                .some(t => this.filter.types.includes(t));
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
=======
>>>>>>> 81c34e50b7593e183c5e2e84664d003dd3b1c675
  }

  openDetails($event, { model: place }) {
    Meteor.call('getPlaceDetail', place.googleId,
      (error, result) => {
        this.$mdDialog.show(
          this.$mdDialog
            .alert()
            .title(result.name)
            .textContent(result.vicinity)
            .ariaLabel('More info')
            .ok('OK')
            .targetEvent($event)
            .clickOutsideToClose(true)
          );
      });
  }

  onFilter(filter) {
    this.types = filter.types;
  }
}

export default MapCtrl;
