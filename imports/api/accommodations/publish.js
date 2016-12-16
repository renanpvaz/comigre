'use strict';

import { Meteor } from 'meteor/meteor';
import { Accommodations } from './collection';

Meteor.publish('accommodations', () => Accommodations.find());
