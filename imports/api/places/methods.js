'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from './collection';

Meteor.methods({
  'places.insert'(place) {
    const newPlace = Object.assign({
      type: 'Point',
      coordinates: [place.lng, place.lat],
      createdAt: new Date()
    }, place);

    Places.insert(newPlace);
  },

  'places.update'(place) {

  },

  'places.remove'(id) {

  }
});
