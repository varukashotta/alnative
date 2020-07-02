import * as React from 'react';
import Slide from './index';
import {mount} from 'enzyme';
import {Container, Heading, SlideButtonsContainer} from './slide.styles';
import SlideButtons from "../slideButtons";

describe('Slide Component', () => {
  let wrapper: any;

  let slideButtons: any;

  beforeEach(() => {
    wrapper = mount(<Slide item={{heading: 'Heading'}} showButtons={true} />);
    slideButtons = <SlideButtons />;
  });

  it('should exist', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have container element', () => {
    expect(wrapper.find(Container)).toBeDefined();
  });

  describe('Slide Buttons', () => {
    it('should have showButtons prop', () => {
      expect(wrapper.prop('showButtons')).toBeDefined();
    });

    it('should have container element', () => {
      expect(typeof wrapper.prop('showButtons') === 'boolean').toBeTruthy();
    });

    it('should show slideButtons element if prop showButtons is true', () => {
      expect(wrapper.find(slideButtons)).toBeDefined();
    });

    it('should not show slideButtons element if prop showButtons is not true', () => {
      wrapper.setProps({'showButtons': false});
      expect(wrapper.find(SlideButtonsContainer).contains(slideButtons)).toBeFalsy();
    });

    it('should be wrapped in the slideButtons container', () => {
      expect(wrapper.find(SlideButtonsContainer)).toBeDefined()
    })

    it('should exist', () => {
      expect(wrapper.find(SlideButtonsContainer).length).toBeGreaterThan(0)
    })

    describe('item prop', () => {
      it('should have heading prop', () => {
        expect(wrapper.prop('item')).toHaveProperty('heading');
      });

      describe('header prop', () => {
        it('should have header prop that is string', () => {
          expect(typeof wrapper.prop('item')['heading'] === 'string').toBeTruthy();
        });

        it('should have styled header text component', () => {
          expect(wrapper.find(Heading).length).toBeGreaterThanOrEqual(1);
        })
      })

    })

  });

});
