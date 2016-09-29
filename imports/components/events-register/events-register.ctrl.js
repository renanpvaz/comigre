'use strict';

import { Meteor } from 'meteor/meteor';

class EventsRegisterCtrl {
  constructor($scope) {
    'ngInject';

    this.$scope = $scope;
  }

  $onInit() {
    this.place = {};
  }

  fetchAddress() {
    Meteor.call('getAddress', this.place.cep,
      (error, place) => {
        console.log(error);

        if (place) {
          this.place = place;
          this.$scope.$digest();
        }
      });
  }
}

export default EventsRegisterCtrl;
