import {mount} from 'enzyme';
import * as React from 'react';
import UserProfile from '../../../demo/userProfile';

describe('User Profile', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<UserProfile />);
  });

  it('should have a navigation component', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have container element', () => {
    expect(wrapper.find('Styled(ScrollViewMock)')).toHaveLength(1);
  });
});
