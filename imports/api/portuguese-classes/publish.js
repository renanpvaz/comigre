'use strict';

import { Meteor } from 'meteor/meteor';
import { PortuguesClasses } from './collection';

Meteor.publish('portugueseClasses', () => PortuguesClasses.find());
