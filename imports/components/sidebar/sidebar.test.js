import SidebarController from './sidebar.controller';
import { assert } from 'meteor/practicalmeteor:chai';

describe('Sidebar', () => {

  describe('Controller', () => {
    it('has a name property [REMOVE]', () => {
      assert.property(new SidebarController(), 'name', 'The controller has no such property');
    });
  });
});
