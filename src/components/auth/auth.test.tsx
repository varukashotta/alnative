import {mount} from 'enzyme';
import * as React from 'react';
import SignUpDemo from '../../../demo/signUpDemo';

describe('SignUp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SignUpDemo />);
  });

  it('should exists', function () {
    expect(wrapper).toBeDefined();
  });
});
