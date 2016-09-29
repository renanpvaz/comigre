'use strict';

import { Meteor } from 'meteor/meteor';

class EventsRegisterCtrl {
  constructor($scope, $http) {
    'ngInject';

    this.$scope = $scope;
    this.$http = $http;
  }

  $onInit() {
    this.place = {};
  }

  register() {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    const key = Meteor.settings.public.googlePlacesAPIKey;
    const street = this.place.street.split(' ').join('+');
    // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBMNCRPFu5EiTK3rudC9EqdqD3Fg4cgxBU

    this.$http.get(`${url}?address=${this.place.number}+${street}+${this.place.state}&key=${key}`)
      .then(console.log);
  }

  fetchAddress() {
    const number = this.place.number;

    this.loading = true;

    Meteor.call('getAddress', this.place.cep,
      (error, place) => {
        this.loading = undefined;
        console.log(error);

        if (place) {
          this.place = place;
          this.place.number = number;
          this.$scope.$digest();
        }
      });
  }
}

export default EventsRegisterCtrl;
