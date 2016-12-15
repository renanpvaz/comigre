'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from './collection';

Meteor.methods({
  'places.insert'({ info, coordinates, type, detailsId }) {
    const newPlace = {
      name: info.name,
      description: info.description,
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
