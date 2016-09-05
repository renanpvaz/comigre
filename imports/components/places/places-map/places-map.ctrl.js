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

  openDetails($event, { model: { _id } }) {
    this.$mdDialog.show({
      template: `<places-detail id="'${_id}'"></places-detail>`,
      parent: this.$rootElement,
      scope: this.$scope,
      preserveScope: true,
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('xs')
    });
  }
}

export default PlacesMapCtrl;
