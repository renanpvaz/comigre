'use strict';

import { Meteor } from 'meteor/meteor';
import { Places } from '../imports/api/places/collection';
import { Guides } from '../imports/api/guides/collection';

Meteor.startup(() => {
  if (!Places.find().count()) {
    [
      {
        lat: -29.842,
        lng: -51.1462,
        message: 'Sapucaia',
        loc: {
            type: 'Point',
            coordinates: [
                -51.1462,
                -29.842
            ]
        },
        types: [
          'local_government_office',
          'city_hall',
          'health'
        ]
    }, {
        lat : -29.9189,
        lng : -51.1781,
        message : 'Canoas',
        loc: {
            type: 'Point',
            coordinates: [
                -51.1781,
                -29.9189
            ]
        },
        types: [
          'local_government_office',
          'city_hall',
          'health'
        ]
      }
    ].forEach(Places.insert);
  }

  if (!Guides.find().count()) {
    [
      {
        title: 'Guia muito informativo',
        content: `
          Informações bem úteis que podem ajudar os usuários
        `
      }, {
        title: 'Guia não muito informativo',
        content: `
          Informações pouco úteis que não irão ajudar os usuários
        `
      }
    ].forEach(g => Guides.insert(g));
  }
});
