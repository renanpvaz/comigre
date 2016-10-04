'use strict';

import { Meteor } from 'meteor/meteor';

import Injectable from '../../../common/injectable';

class PlacesRegisterCtrl extends Injectable {
  constructor($scope, $rootElement, $mdMedia, $mdDialog, PlacesRegisterService) {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.place = {};
    this.center = {
      lat: -15.893,
      lng: -52.2599
    };
    this.events = {
      markers: {
        enable: ['dragend']
      }
    };

    this.$scope.$on('leafletDirectiveMarker.dragend', (event, args) => {
      this.center.lat = args.model.lat;
      this.center.lng = args.model.lng;
    });

    this.$scope.$on('leafletDirectiveMap.click', (event, args) => {
      this.PlacesRegisterService.inverseGeocode(args.leafletEvent.latlng)
        .then(place => this.place = place);
    });
  }

  openMap(event) {
    this.markers = [{
      lat: this.center.lat,
      lng: this.center.lng,
      focus: true,
      draggable: true,
      message: 'Local selecionado'
    }];

    this.center.zoom = 8;

    this.$mdDialog.show({
      template: `
      <div style="width: 100%;height: 100%;">
        <leaflet
          lf-center="$ctrl.center"
          markers="$ctrl.markers"
          event-broadcast="$ctrl.events"
          width="100%"
          height="100%">
        </leaflet>
      </div>`,
      controller: () => this,
      scope: this.$scope,
      controllerAs: '$ctrl',
      clickOutsideToClose: true,
      fullscreen: this.$mdMedia('xs'),
      targetEvent: event
    });
  }

  register() {
    this.PlacesRegisterService.geocode(this.place)
      .then(coords => {
        this.center = coords;
        this.onConfirm({
          place: this.place,
          coords: this.center
        });
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

          this.PlacesRegisterService.geocode(this.place)
            .then(coords => {
              this.center = coords;
              console.log(coords);
            });
        }
      });
  }
}

export default PlacesRegisterCtrl;
