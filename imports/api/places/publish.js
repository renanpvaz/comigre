'use strict';

import { Meteor } from 'meteor/meteor';

import { Places } from './collection';

if (Meteor.isServer) {
  Meteor.publish('nearbyPlaces', ({ lng, lat }) => {
    if (lat !== -15.893 && lng !== -52.2599) {
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
    }
  });
}
