'use strict';

import { assert } from 'meteor/practicalmeteor:chai';

import PlacesFilterCtrl from './placesFilter.ctrl';

describe('PlacesFilter', () => {

  describe('Controller', () => {
    it('should select filter', () => {
      const ctrl = new PlacesFilterCtrl();
      const filter = {
          name:'a',
          icon: 'b',
          types: ['c', 'd']
      };

      ctrl.select(filter);

      assert.equal(ctrl.selected, filter);
    });
  });
});
