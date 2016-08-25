'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from '../imports/api/places/places.js';

Meteor.startup(() => {
  if (Places.find().count() === 0) {
    const places = [{
        lat: -29.842,
        lng: -51.1462,
        message: 'Sapucaia'
    }, {
        lat : -29.9189,
        lng : -51.1781,
        message : 'Canoas'
    }];

    places.forEach((i) => Places.insert(i));
  }
});
