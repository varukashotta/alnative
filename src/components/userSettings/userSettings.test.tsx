import * as React from 'react';
import {mount} from 'enzyme';
import UserSettingsDemo from '../../../demo/userSettings';

describe('User Setttings', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<UserSettingsDemo />);
  });

  it('should return userSettings component', function () {
    expect(wrapper).toBeDefined();
  });
});
