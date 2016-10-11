'use strict';

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Places = new Mongo.Collection('places');

Places.before.insert((userId, doc) => {
  doc.loc = {
    type: 'Point',
    coordinates: [ doc.lng, doc.lat ]
  };
});

if (Meteor.isServer) {
  Places._ensureIndex({ 'loc': '2dsphere' });
}
