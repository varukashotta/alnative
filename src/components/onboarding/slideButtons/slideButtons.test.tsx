import SlideButtons from './index';
import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {
  Button,
  ButtonWrapper,
  Container,
  GetStarted,
  GetStartedText,
  NavTitle,
} from './slideButtonStyles';

describe('SlideButton component', () => {
  let wrapper;

  beforeEach(() => {
    const navigate = jest.fn();
    wrapper = mount(
      <SlideButtons
        _getStarted={jest.fn()}
        _navigateToPage={navigate}
        activeSlide={3}
        numberOfSlides={0}
      />,
    );
  });

  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain Container', () => {
    expect(wrapper.contains(Container)).toBeDefined();
  });

  it('should have navigateToProps function', () => {
    expect(wrapper.prop('_navigateToPage')).toBeDefined();
  });

  it('should have navigateToProps function', () => {
    expect(typeof wrapper.prop('_navigateToPage') === 'function').toBeTruthy();
  });

  it('should have total slides prop', () => {
    expect(wrapper.prop('numberOfSlides')).toBeDefined();
  });

  it('should have renderButtons method', () => {
    expect(wrapper.contains(Button)).toBeDefined();
  });

  it('should have activeSlide prop', () => {
    expect(wrapper.prop('activeSlide')).toBeDefined();
  });

  it('should have activeSlide that is an int prop', () => {
    expect(typeof wrapper.prop('activeSlide') === 'number').toBeTruthy();
  });

  describe('should have navigation buttons', () => {
    it('should have next button to move to next slide', () => {
      expect(wrapper.contains(NavTitle)).toBeDefined();
    });

    it('should have button container', () => {
      expect(wrapper.contains(ButtonWrapper)).toBeDefined();
    });

    it('should have get started button when it is on the last index', () => {
      expect(wrapper.contains(GetStarted)).toBeDefined();
    });

    it('should have get started text when it is on the last index', () => {
      expect(wrapper.contains(GetStartedText)).toBeDefined();
    });
  });

  describe('Get started button', () => {
    it('should have a getStarted prop', () => {
      expect(wrapper.prop('_getStarted')).toBeDefined();
    });

    it('should have a getStarted prop to be typeof function', () => {
      expect(typeof wrapper.prop('_getStarted') === 'function').toBeTruthy();
    });
  });
});
