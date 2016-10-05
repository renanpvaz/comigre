'use strict';

import { Meteor } from 'meteor/meteor';

import { Guides } from './collection';

if(Meteor.isServer){
  Meteor.publish('allGuides', () => Guides.find());
}
