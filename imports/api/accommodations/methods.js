'use strict';

import { Meteor } from 'meteor/meteor';
import { Accommodations } from './collection';
import { ACCOMMODATION } from '../../ui/config';

Meteor.methods({
  [`${ACCOMMODATION}.insert`]: (accommodation) => {
    const newAccommodation = {
      name: accommodation.name,
      description: accommodation.description,
      price: accommodation.price,
      type: accommodation.type,
      roomType: accommodation.roomType,
      amenities: accommodation.amenities,
      rules: accommodation.rules,
      hostName: accommodation.hostName,
      hostPhone: accommodation.hostPhone,
      hostEmail: accommodation.hostEmail,
      createdAt: new Date()
    };

    return Accommodations.insert(newAccommodation);
  }

  [`${ACCOMMODATION}.remove`]: ({ _id }) => {

    return Accommodations.remove({ _id });
  }

  [`${ACCOMMODATION}.update`]: (accommodation) => {

    return Accommodations.update(accommodation);
  }

});
