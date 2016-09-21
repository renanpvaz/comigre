'use strict';

import { Meteor } from 'meteor/meteor';

class EventsRegisterCtrl {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  fetchAddress() {
    Meteor.call('getAddress', this.cep,
      (error, result) => {
        console.log(result);
        console.log(error);
      });
  }
}

export default EventsRegisterCtrl;
