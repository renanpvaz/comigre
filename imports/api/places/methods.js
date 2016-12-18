'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from './collection';

Meteor.methods({
  'places.insert'({ info, coordinates, type, detailsId }) {
    const newPlace = {
      name: info.name,
      description: `${info.description.substring(0, 135)}...`,
      detailsId,
      type,
      userId: this.userId,
      createdAt: new Date(),
      location: {
        type: 'Point',
        coordinates: [
          coordinates.lng,
          coordinates.lat
        ]
      }
    };

    if (!newPlace.userId) {
      throw new Meteor.Error('logged-out', 'User must be logged to register a place');
    }

    return Places.insert(newPlace);
  }
});
