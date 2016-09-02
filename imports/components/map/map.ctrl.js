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
