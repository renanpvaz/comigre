'use strict';

import { Meteor } from 'meteor/meteor';

import { Translations } from './collection';

if (Meteor.isServer) {
  Meteor.publish('codeTranslations', function (languageCode) {
    const query = {
      languageCode
    };

    return Translations.find(query);
  });
}
