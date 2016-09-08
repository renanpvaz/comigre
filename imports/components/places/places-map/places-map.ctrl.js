import Injectable from '../../../common/injectable';

class PlacesMapCtrl extends Injectable {
  constructor($scope, $mdMedia, $mdDialog, leafletData, $rootElement) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.$scope.$on('leafletDirectiveMarker.dblclick',
      (event, args) => {
        this.openDetails(event, args);
      });

    this.defaults = {
      zoomControlPosition: 'topright',
      zoomControl: !this.$mdMedia('xs'),
      tileLayerOptions: {
        detectRetina: this.$mdMedia('xs')
      }
    };
  }

  $onChanges() {
    const model = this.selectedPlace;

    if (model) {
      const marker = this.places.find(m => m._id === model._id);

      this.openDetails(undefined, { model });
      this.geoCenter.lat = model.lat;
      this.geoCenter.lng = model.lng;

      if(!marker) {
        model.focus = true;
        this.places.push(model);
      } else {
        marker.focus = true;
      }
    }
  }

  openDetails(event, { model: { _id } }) {
    this.$mdDialog.show({
      template: `<places-detail id="'${_id}'"></places-detail>`,
      parent: this.$rootElement,
      scope: this.$scope,
      preserveScope: true,
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('xs'),
      event
    });
  }
}

export default PlacesMapCtrl;
