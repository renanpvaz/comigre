import { Meteor } from 'meteor/meteor';
import { Institutions } from '../imports/api/institutions.js';

Meteor.startup(() => {
  if (!Object.keys(Meteor.settings.public).length) {
    throw new Meteor.Error('settings', 'No settings.json file in the root of the project');
  }

  if (Institutions.find().count() === 0) {
    const institutions = [{
        lat: -29.842,
        lng: -51.1462,
        message: 'Sapucaia'
    }, {
        lat : -29.9189,
        lng : -51.1781,
        message : 'Canoas'
    }];

    institutions.forEach((i) => Institutions.insert(i));
  }
});
