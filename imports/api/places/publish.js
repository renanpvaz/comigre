'use strict';

import { Meteor } from 'meteor/meteor';

import { Places } from './collection';

if (Meteor.isServer) {
  Meteor.publish('nearbyPlaces', ({ lng, lat, meters = 40000 }) => {
    const query = {
      loc: {
        $near:{
          $geometry:{
            type:'Point',
            coordinates: [lng, lat]
          },
          $maxDistance: meters
        }
      }
    };

    return Places.find(query);
  });

  Meteor.publish('allPlaces', () => {
    return Places.find();
  });

  Meteor.publish('userPlaces', function () {
    const query = {
      userId: this.userId
    };
    return Places.find(query);
  });
}
