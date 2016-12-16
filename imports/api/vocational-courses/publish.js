'use strict';

import { Meteor } from 'meteor/meteor';
import { VocationalCourses } from './collection';

Meteor.publish('vocationalCourses', () => VocationalCourses.find());
