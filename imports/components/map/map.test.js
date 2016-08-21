import { assert } from 'meteor/practicalmeteor:chai';

import MapCtrl from './map.ctrl';

describe('map', () => {

  describe('Controller', () => {
    it('is centered in brazil by default', () => {
      const brazilCenter = {
        lat: -15.893,
        lng: -52.2599,
        zoom: 5
      };

      assert.deepEqual(new MapCtrl().center, brazilCenter);
    });
  });
});
