'use strict';

import { Meteor } from 'meteor/meteor';

import Injectable from '../../../common/injectable';

class EventsRegisterCtrl extends Injectable {
  constructor($scope, $rootElement, $mdMedia, $mdDialog, PlacesRegisterService) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.place = {
      coords: {
        lat: -15.893,
        lng: -52.2599
      }
    };

    this.$scope.$on('leafletDirectiveMap.click', (event, args) => {
      this.PlacesRegisterService.inverseGeocode(args.leafletEvent.latlng)
        .then(place => this.place = place);
    });
  }

  openMap(event) {
    this.markers = [{
      lat: this.place.coords.lat,
      lng: this.place.coords.lng,
      zoom: 8,
      focus: true,
      message: 'Local'
    }];

    this.$mdDialog.show({
      template: `
      <div style="width: 100%;height: 100%;">
        <leaflet
          lf-center="$ctrl.place.coords"
          markers="$ctrl.markers"
          width="100%"
          height="100%">
        </leaflet>
      </div>`,
      controller: () => this,
      controllerAs: '$ctrl',
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('xs'),
      targetEvent: event
    });
  }

  register() {
    this.PlacesRegisterService.geocode(this.place)
      .then(coords => {
        this.place.coords = coords;
        this.onConfirm({ place: this.place });
      });
  }

  fetchAddress() {
    const number = this.place.number;

    this.loading = true;

    Meteor.call('getAddress', this.place.cep,
      (error, place) => {
        console.log(error);
        this.loading = undefined;

        if (place) {
          this.place = place;
          this.place.number = number;
          this.$scope.$digest();
        }
      });
  }
}

export default EventsRegisterCtrl;
