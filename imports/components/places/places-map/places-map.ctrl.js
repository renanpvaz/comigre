import assign from 'angular-assign';

class PlacesMapCtrl {
  constructor($scope, $mdMedia, $mdDialog, $rootElement) {
    'ngInject';

    assign(arguments).to(this);
  }

  $onInit() {
    this.$scope.$on('leafletDirectiveMarker.dblclick',
      (event, args) => {
        this.openDetails(event, args);
      });

    this.defaults = {
      zoomControlPosition: 'topright',
      zoomControl: !this.$mdMedia('xs'),
      tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      tileLayerOptions: {
        detectRetina: this.$mdMedia('xs'),
        unloadInvisibleTiles: true
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
