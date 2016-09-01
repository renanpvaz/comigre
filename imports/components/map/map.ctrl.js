import { Places } from '../../api/places/places.js';

class MapCtrl {
  constructor($scope, $reactive, $mdMedia, MapService, $mdDialog) {
    'ngInject';

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

    this.$scope = $scope;
    this.$mdMedia = $mdMedia;
    this.MapService = MapService;
    this.$mdDialog = $mdDialog;
  }

  $onInit() {
    this.$scope.$on('leafletDirectiveMarker.popupclose',
      (event, args) => {
        console.log(args);
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
    this.$mdDialog.show(
      this.$mdDialog
        .alert()
        .title(place.message)
        .textContent(place.types.join(', '))
        .ariaLabel('More info')
        .ok('Got it')
        .targetEvent($event)
        .clickOutsideToClose(true)
      );
  }

  onFilter(filter) {
    this.types = filter.types;
  }
}

export default MapCtrl;
