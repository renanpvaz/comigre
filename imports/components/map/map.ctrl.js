import { Places } from '../../api/places/places.js';

class MapCtrl {
  constructor($scope, $reactive, $mdMedia, MapService) {
    'ngInject';
    $reactive(this).attach($scope);

    // $scope.$on('leafletDirectiveMarker.dblclick', (event) => console.log(event));

    this.types = [];

    this.helpers({
      places() {
        return Places.find({
          types: {
            $in: this.getReactively('types')
          }
        }).fetch().map(place => {
          place.compileMessage = true;
          place.getMessageScope = () => $scope;
          place.message = `
              <div layout="row">
                <p flex>${place.message}</p>
                <i flex="10" class="material-icons md-icon-button" ng-click="vm.openDetails($event)">
                  search
                </i>
              </div>
              `.trim(); // TODO: Move to file

          return place;
        });
      }
    });

    this.$scope = $scope;
    this.$mdMedia = $mdMedia;
    this.MapService = MapService;
  }

  openDetails(e) {
    console.log(e); // TODO: Open dialog and fetch details
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
