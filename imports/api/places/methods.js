'use strict';

import { Meteor } from 'meteor/meteor';

import cep from 'cep-promise';

const baseUrl = 'https://maps.googleapis.com/maps/api/place/';
const key = Meteor.settings.public.googlePlacesAPIKey;

Meteor.methods({
  getPlacesFromGoogle(center, types) {
    const url = `${baseUrl}nearbysearch/json`;
    const response = HTTP.call('GET', url, {
      params: {
        key,
        location: `${center.lat},${center.lng}`,
        types: types.join('|'),
        rankby: 'distance'
      }
    });

    return response.data.results;
  },

  getPlaceDetail(placeid) {
    const url = `${baseUrl}details/json`;
    const response = HTTP.call('GET', url, {
      params: {
        key,
        placeid
      }
    });

    return response.data.result;
  },

  getAddress(input = 0) {
    console.log(input);
    return cep(input);
  }
});
