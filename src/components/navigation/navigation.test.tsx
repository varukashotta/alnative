import {mount} from 'enzyme';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavDemo from '../../../demo/navigation';

describe('Navigation Component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<NavDemo />);
  });

  it('should have a navigation component', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have NavigationContainer from react-navigation', () => {
    expect(wrapper.find(NavigationContainer).length).toBeGreaterThanOrEqual(1);
  });

  it('should have children props', () => {
    expect(wrapper.prop('children')).toBeUndefined();
  });
});
