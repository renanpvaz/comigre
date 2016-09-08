'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from '../imports/api/places/places.js';

Meteor.startup(() => {
  if (Places.find().count() === 0) {
    const places = [{
        lat: -29.842,
        lng: -51.1462,
        message: 'Sapucaia',
        loc: {
            type: 'Point',
            coordinates: [
                -51.1462,
                -29.842
            ]
        },
        types: [
          'local_government_office',
          'city_hall',
          'health'
        ]
    }, {
        lat : -29.9189,
        lng : -51.1781,
        message : 'Canoas',
        loc: {
            type: 'Point',
            coordinates: [
                -51.1781,
                -29.9189
            ]
        },
        types: [
          'local_government_office',
          'city_hall',
          'health'
        ]
    }];

    places.forEach((i) => Places.insert(i));
  }
});
