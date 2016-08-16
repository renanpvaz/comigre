import { Meteor } from 'meteor/meteor';

import '../imports/api/institutions.js';

Meteor.startup(() => {
  if (!Object.keys(Meteor.settings.public).length) {
    throw new Meteor.Error('settings', 'No settings.json file in the root of the project');
  }
});
