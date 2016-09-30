'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from '../../api/places/places';

class EventsRegisterCtrl {
  constructor($scope, $http, $rootElement, $mdMedia, $mdDialog, leafletData) {
    'ngInject';

    this.$scope = $scope;
    this.$http = $http;
    this.$rootElement = $rootElement;
    this.$mdMedia = $mdMedia;
    this.$mdDialog = $mdDialog;
    this.leafletData = leafletData;
  }

  $onInit() {
    this.baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
    this.place = {};
    this.event = {};

    this.$scope.$on('leafletDirectiveMap.click', (event, args) => {
      const { lat, lng } = args.leafletEvent.latlng;

      this.$http.get(`${this.baseUrl}?latlng=${lat},${lng}`)
        .then(response => {
          if (response.data.status === 'OK') {
            const address = response.data.results[0].formatted_address.split(',');

            this.$mdDialog.hide();

            this.place = {
              street: address[0],
              number: address[1].split(' - ')[0],
              neighborhood: address[1].split(' - ')[1],
              city: address[2].split(' - ')[0],
              state: address[2].split(' - ')[1]
            };

            console.log(response.data.results[0]);
          }
        });


    });
  }

  openMap(event) {
    this.geoCenter = {
      lat: -15.893,
      lng: -52.2599
    };

    this.$mdDialog.show({
      template: `<div style="width: 100%;height: 100%;">
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
    const key = Meteor.settings.public.googlePlacesAPIKey;
    const street = this.place.street.split(' ').join('+');
    const url = `${this.baseUrl}?address=${this.place.number}+${street}+${this.place.state}&key=${key}`;

    this.$http.get(url)
      .then(response => {
        if (response.data.status === 'OK') {
          const { lat, lng } = response.data.results[0].geometry.location;

          Places.insert({
            message: this.event.name,
            detailId: 1,
            lat,
            lng,
            loc : {
              type: 'Point',
              coordinates: [ lng, lat ]
            },
            types:['event']
          });
        }
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
