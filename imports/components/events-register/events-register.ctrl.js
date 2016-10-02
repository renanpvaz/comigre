'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from '../../api/places/places';

import Injectable from '../../common/injectable';

class EventsRegisterCtrl extends Injectable {
  constructor($scope, $rootElement, $mdMedia, $mdDialog, EventsRegisterService) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.place = {};
    this.event = {};

    this.$scope.$on('leafletDirectiveMap.click', (event, args) => {
      this.EventsRegisterService.inverseGeocode(args.leafletEvent.latlng)
        .then(place => this.place = place);
    });
  }

  openMap(event) {
    this.geoCenter = {
      lat: -15.893,
      lng: -52.2599
    };

    this.$mdDialog.show({
      template: `
      <div style="width: 100%;height: 100%;">
        <leaflet
          width="100%"
          height="100%">
        </leaflet>
      </div>`,
      parent: this.$rootElement,
      scope: this.$scope,
      preserveScope: true,
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('xs'),
      event
    });
  }

  register() {
    this.EventsRegisterService.geocode(this.place)
      .then(console.log);
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
