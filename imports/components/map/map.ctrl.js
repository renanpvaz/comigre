import { Places } from '../../api/places/places.js';

class MapCtrl {
  constructor($scope, $reactive, $mdMedia, MapService) {
    'ngInject';

    $reactive(this).attach($scope);

    this.types = [];

    this.helpers({
      places() {
        return Places.find({
          types: this.getReactively('types')
        });
      }
    });

    this.$scope = $scope;
    this.$mdMedia = $mdMedia;
    this.MapService = MapService;
  }

  onFilter(filter) {
    this.types = filter.types;
  }

  $onInit() {
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

    this.$scope.$watch('vm.filter', (val) => {
      if (val && this.center.zoom >= 10) {
        this.getNewPlaces(this.places, val);
      }
    });
  }
}

export default MapCtrl;
