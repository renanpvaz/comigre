'use strict';

import { Meteor } from 'meteor/meteor';

Meteor.methods({
  getPlacesFromGoogle: function (center) {
    const reqURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    const result = HTTP.call('GET', reqURL, {
      params: {
        key: Meteor.settings.public.googlePlacesAPIKey,
        location: `${center.lat},${center.lng}`,
        types: 'local_government_office|city_hall',
        rankby: 'distance'
      }
    });

    return result.data.results;
  }
});
