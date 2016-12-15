'use strict';

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Translations = new Mongo.Collection('translations');
