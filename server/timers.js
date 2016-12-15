'use strict';

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.setInterval((arguments) => {
    Meteor.users.remove({
      'emails.address': {
        $regex : ".*@anon"
      }
    });
  }, 1000 * 60 * 60 * 24 * 7) // one week
});
