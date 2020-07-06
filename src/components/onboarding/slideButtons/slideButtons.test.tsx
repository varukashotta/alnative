import SlideButtons from './index';
import {mount} from 'enzyme';
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
    wrapper = mount(<SlideButtons activeSlide={3} numberOfSlides={0} />);
  });

  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain Container', () => {
    expect(wrapper.contains(Container)).toBeDefined();
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
});
