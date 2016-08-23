import SidebarCtrl from './sidebar.ctrl';
import { assert } from 'meteor/practicalmeteor:chai';

describe('Sidebar', () => {

  describe('Controller', () => {
    it('has a name property', () => {
      assert.property(new SidebarCtrl(), 'name', 'The controller has no such property');
    });
  });
});
