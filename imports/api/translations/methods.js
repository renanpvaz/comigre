'use strict';

import { Meteor } from 'meteor/meteor';
import { Translations } from './collection';

Meteor.methods({
  'translations.insert'({ name, description }, languageCode) {
    const newTranslation = {
      languageCode,
      name,
      description,
      createdAt: new Date()
    };

    console.log(newTranslation);

    return Translations.insert(newTranslation);
  }
});
