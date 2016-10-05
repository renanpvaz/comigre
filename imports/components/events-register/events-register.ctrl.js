'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from '../../api/places/collection';

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

  onSelectPlace(place, coords) {
    console.log(place);
    console.log(coords);
  }

  register() {

  }
}

export default EventsRegisterCtrl;
