'use strict';

import { Meteor } from 'meteor/meteor';

import { Places } from './collection';

if (Meteor.isServer) {
  Meteor.publish('nearbyPlaces', ({ lng, lat }) => {
    const query = {
      loc: {
        $near:{
          $geometry:{
            type:'Point',
            coordinates: [lng, lat]
          },
          $maxDistance: 10000
        }
      }
    };

    if (lat !== -15.893 && lng !== -52.2599) {
      return Places.find(query);
    }
  });

  Meteor.publish('userPlaces', function () {
    const query = {
      userId: this.userId
    };
    return Places.find(query);
  });
}
