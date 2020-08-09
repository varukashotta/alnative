import {mount} from 'enzyme';
import * as React from 'react';
import AuthDemo from '../../../demo/authDemo';

describe('SignUp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AuthDemo />);
  });

  it('should exists', function () {
    expect(wrapper).toBeDefined();
  });
});
