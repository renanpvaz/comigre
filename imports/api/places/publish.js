'use strict';

import { Meteor } from 'meteor/meteor';

import { Places } from './places';

if (Meteor.isServer) {
  Meteor.publish('nearbyPlaces', ({ lng, lat }) => {
    return Places.find({
      loc: {
        $near:{
          $geometry:{
            type:'Point',
            coordinates: [lng, lat]
          },
          $maxDistance: 10000
        }
      }
    });
  });
}
