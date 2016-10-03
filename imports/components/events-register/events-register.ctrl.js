'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from '../../api/places/places';

import Injectable from '../../common/injectable';

class EventsRegisterCtrl extends Injectable {
  constructor() {
    'ngInject';

    super(...arguments);
  }

  $onInit() {
    this.place = {};
    this.event = {};
  }

  onSelectPlace(place) {
    console.log(place);
  }

  register() {

  }
}

export default EventsRegisterCtrl;
