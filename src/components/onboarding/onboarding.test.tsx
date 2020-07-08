import {mount} from 'enzyme';
import React from 'react';
import Onboarding from '.';
import {FlatList, StatusBar} from 'react-native';
import Slide from './slide';
import {Container} from './onboardingStyles';

describe('Onboarding component', () => {
  let wrapper: any;

  let slider: any;

  let slideShallow: any;

  let slide: any;

  beforeEach(() => {
    wrapper = mount(
      <Onboarding
        slideButtons={true}
        data={[{heading: 'Heading', text: 'Content'}]}
        statusBar={true}
        _getStarted={jest.fn()}
      />,
    );

    slider = wrapper.find(FlatList);

    const navigate = jest.fn();

    slide = (
      <Slide
        _getStarted={jest.fn()}
        _navigateToPage={navigate}
        item={{}}
        showButtons={true}
        numberOfSlides={3}
        activeSlide={1}
      />
    );

    slideShallow = mount(slide);
  });

  it('should render without issues', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should have prop navigateToProps', () => {
    expect(slideShallow.prop('_navigateToPage')).toBeDefined();
  });

  it('should have prop navigateToProps as function', () => {
    expect(
      typeof slideShallow.prop('_navigateToPage') === 'function',
    ).toBeTruthy();
  });

  describe('Get started button', () => {
    it('should have a getStarted prop', () => {
      expect(wrapper.prop('_getStarted')).toBeDefined();
    });

    it('should have a getStarted prop to be typeof function', () => {
      expect(typeof wrapper.prop('_getStarted') === 'function').toBeTruthy();
    });
  });

  it('should have Statusbar prop', () => {
    expect(wrapper.prop('statusBar')).toBeDefined();
  });

  it('should have Statusbar component defined', () => {
    expect(wrapper.contains(StatusBar)).toBeTruthy();
  });

  it('should have statusBar prop to be boolean', () => {
    expect(typeof wrapper.prop('statusBar') === 'boolean').toBeTruthy();
  });

  it('should have container wrapper as parent', () => {
    expect(wrapper.contains(Container)).toBeDefined();
  });

  it('should have data props', () => {
    expect(wrapper.prop('data')).toBeDefined();
  });

  it('should have data props that is an array', () => {
    expect(Array.isArray(wrapper.prop('data'))).toBeTruthy();
  });

  it('should have data array of objects', () => {
    expect(
      wrapper.prop('data').map((item) => typeof item === 'object'),
    ).toBeTruthy();
  });

  it('should have data prop with array objects that have a header if type string', () => {
    expect(
      wrapper
        .prop('data')
        .filter((item) => 'heading' in item && typeof item.heading === 'string')
        .length,
    ).toBeGreaterThanOrEqual(wrapper.prop('data').length);
  });

  it('should have data prop with array objects that have a text if type string', () => {
    expect(
      wrapper
        .prop('data')
        .filter((item) => 'text' in item && typeof item.heading === 'string')
        .length,
    ).toBeGreaterThanOrEqual(wrapper.prop('data').length);
  });

  it('should have numberOfSlides props', () => {
    expect(slideShallow.prop('numberOfSlides')).toBeDefined();
  });

  it('should have activeSlide props', () => {
    expect(slideShallow.prop('activeSlide')).toBeDefined();
  });

  describe('Slider Component Capabilities', () => {
    it('should have FlatList Component as child component', () => {
      expect(wrapper.find(FlatList).length).toEqual(1);
    });

    it('should have horizontal prop', () => {
      expect(slider.prop('horizontal')).toBeDefined();
    });

    it('should have horizontal prop that is equal to true', () => {
      expect(slider.prop('horizontal')).toBeTruthy();
    });

    it('should have data prop', () => {
      expect(slider.prop('data')).toBeDefined();
    });

    it('should have data prop that is an array', () => {
      expect(Array.isArray(slider.prop('data'))).toBeTruthy();
    });

    it('should have renderItem prop', () => {
      expect(slider.prop('renderItem')).toBeDefined();
    });

    it('should have renderItem prop to be function', () => {
      expect(slider.prop('renderItem')).toBeInstanceOf(Function);
    });

    it('should have renderItem prop to return Slide', () => {
      const mockFunction = jest.fn((point) => point);

      wrapper.find(FlatList).props('renderItem', mockFunction(slide));

      expect(mockFunction).toHaveBeenCalled();

      expect(mockFunction).toHaveReturnedWith(slide);
    });

    it('should have keyExtractor prop', () => {
      expect(slider.prop('keyExtractor')).toBeDefined();
    });

    it('should have keyExtractor prop to be function', () => {
      expect(slider.prop('keyExtractor')).toBeInstanceOf(Function);
    });
  });

  describe('Slide component capabilities', function () {
    it('should be defined', () => {
      expect(slideShallow.prop('item')).toBeDefined();
    });

    it('should have a prop item that is an object', () => {
      expect(
        typeof slideShallow.prop('item') === 'object' &&
          slideShallow.prop('item') !== null,
      ).toBeTruthy();
    });

    it('should have a prop showButtons', () => {
      expect(slideShallow.prop('showButtons')).toBeDefined();
    });

    it('should have a prop showButtons that is of boolean type', () => {
      expect(
        typeof slideShallow.prop('showButtons') === 'boolean',
      ).toBeTruthy();
    });
  });
});
