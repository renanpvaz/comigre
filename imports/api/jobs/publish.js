'use strict';

import { Meteor } from 'meteor/meteor';
import { Jobs } from './collection';

Meteor.publish('jobs', () => Jobs.find());
