'use strict';

import { Meteor } from 'meteor/meteor';

import { Guides } from './collection';

Meteor.publish('guides', () => Guides.find());
