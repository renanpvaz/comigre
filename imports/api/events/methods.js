'use strict';

import { Meteor } from 'meteor/meteor';
import { Events } from './collection';
import { EVENT } from '../../ui/config';

Meteor.methods({
  [`${EVENT}.insert`]: ({ name, description, time, date }) => {
    const newEvent = {
      name,
      description,
      time,
      date,
      createdAt: new Date()
    };

    return Events.insert(newEvent);
  }
});
