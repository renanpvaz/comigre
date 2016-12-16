'use strict';

import { Meteor } from 'meteor/meteor';
import { Events } from './collection';
import { EVENT } from '../../ui/config';

Meteor.methods({
  [`${EVENT}.insert`]: (event) => {
    const newEvent = {
      name: event.name,
      description: event.description,
      date: event.date,
      time: event.time,
      promoterName: event.promoterName,
      promoterPhone: event.promoterPhone,
      promoterEmail: event.promoterEmail,
      createdAt: new Date()
    };

    return Events.insert(newEvent);
  }

  [`${EVENT}.remove`]: ({ _id }) => {

    return Events.remove({ _id });
  }

  [`${EVENT}.update`]: (event) => {

    return Events.update(event);
  }
});
