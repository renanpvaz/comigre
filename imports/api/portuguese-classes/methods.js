'use strict';

import { Meteor } from 'meteor/meteor';
import { PortugueseClasses } from './collection';
import { PORTUGUESE_CLASS } from '../../ui/config';

Meteor.methods({
  [`${PORTUGUESE_CLASS}.insert`]: (portuguesClass) => {

    const newPortuguesClass = {
      name: portuguesClass.name,
      description: portuguesClass.description,
      price: portuguesClass.price,
      shift: portuguesClass.shift,
      timetable: portuguesClass.timetable,
      providerName: portuguesClass.providerName,
      providerPhone: portuguesClass.providerPhone,
      providerEmail: portuguesClass.providerEmail,
      createdAt: new Date()
    };

    return PortugueseClasses.insert(newPortuguesClass);
  }

  [`${PORTUGUESE_CLASS}.remove`]: ({ _id }) => {

    return PortugueseClasses.remove({ _id });
  }

  [`${PORTUGUESE_CLASS}.update`]: (portuguesClass) => {

    return PortugueseClasses.update(portuguesClass);
  }
});
