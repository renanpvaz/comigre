import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Places = new Mongo.Collection('places');

if (Meteor.isServer) {
  Places._ensureIndex({ 'loc': '2dsphere' });
}
