import { Places } from '../../api/places/places.js';
import Injectable from '../../common/injectable';

class MapCtrl extends Injectable {
  constructor($scope, $reactive, $mdMedia, MapService, $mdDialog, leafletData, $rootElement) {
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

  openDetails($event, { model: { _id: id } }) {
    this.$mdDialog.show({
      template: `<places-detail id="'${id}'"></places-detail>`,
      parent: this.$rootElement,
      scope: this.$scope,
      preserveScope: true,
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('xs')
    });
  }

  onFilter(filter) {
    this.types = filter.types;
    this.MapService.getNewPlaces(this.places, filter);
  }
}

export default MapCtrl;
