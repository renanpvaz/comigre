'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from './collection';

Meteor.methods({
  'places.insert'({ name, description, coordinates, type, detailsId }) {
    const newPlace = {
      name,
      description,
      detailsId,
      type,
      userId: this.userId,
      createdAt: new Date(),
      location: {
        type: 'Point',
        coordinates
      }
    };

    if (!newPlace.userId) {
      throw new Meteor.Error('logged-out', 'User must be logged to register a place');
    }

    return Places.insert(newPlace);
  }
});
