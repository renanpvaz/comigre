'use strict';

import { Meteor } from 'meteor/meteor';
import { Events } from '../../api/events/collection';
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

  onSelectPlace(place) {
    const eventId = this.register();

    if (eventId) {
      Places.insert({
        message: this.event.name,
        detailsId: eventId,
        lat: place.coords.lat,
        lng: place.coords.lng,
        types: ['event']
      });
    }
  }

  register() {
    if (this.form.$valid) {
      return Events.insert(this.event);
    }
  }
}

export default EventsRegisterCtrl;
