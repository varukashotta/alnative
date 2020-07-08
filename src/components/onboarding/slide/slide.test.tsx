import * as React from 'react';
import Slide from './index';
import {mount} from 'enzyme';
import {Container, ContentWrapper, Heading, Text, Image} from './slide.styles';

describe('Slide Component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <Slide
        item={{
          heading: 'Heading',
          text: 'This is sub text',
          image: '',
          customElement: null,
        }}
        headerStyles={''}
      />,
    );
  });

  it('should have children props for custom react component children', () => {
    expect(wrapper.prop('item')).toHaveProperty('customElement');
  });

  it('should exist', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have container element', () => {
    expect(wrapper.find(Container)).toBeDefined();
  });

  it('should have have headerStyles prop', () => {
    expect(wrapper.prop('headerStyles')).toBeDefined();
  });

  describe('item prop', () => {
    it('should have heading prop', () => {
      expect(wrapper.prop('item')).toHaveProperty('heading');
    });

    describe('header prop', () => {
      it('should have header prop that is string', () => {
        expect(typeof wrapper.prop('item').heading === 'string').toBeTruthy();
      });

      it('should have styled header text component', () => {
        expect(wrapper.find(Heading).length).toBeGreaterThanOrEqual(1);
      });
    });

    describe('should have content container', () => {
      it('should have content wrapper', function () {
        expect(wrapper.contains(ContentWrapper)).toBeDefined();
      });

      it('should have text prop', () => {
        expect(wrapper.prop('item')).toHaveProperty('text');
      });

      it('should show Text element if text prop exists', () => {
        expect(wrapper.contains(Text)).toBeTruthy();
      });
    });

    describe('should have image component', () => {
      it('should have image prop', () => {
        expect(wrapper.prop('item')).toHaveProperty('image');
      });

      it('should show Text element if text prop exists', () => {
        expect(wrapper.contains(Image)).toBeTruthy();
      });
    });
  });
});

// TODO: Fix tests after refactoring

// it('should have numberOfSlides prop', () => {
//     expect(wrapper.prop('numberOfSlides')).toBeDefined();
// });
//
// it('should have numberOfSlides that is an int prop', () => {
//     expect(typeof wrapper.prop('numberOfSlides') === 'number').toBeTruthy();
// });
//
// it('should have activeSlide prop', () => {
//     expect(wrapper.prop('activeSlide')).toBeDefined();
// });
//
// it('should have activeSlide that is an int prop', () => {
//     expect(typeof wrapper.prop('activeSlide') === 'number').toBeTruthy();
// });
//
// describe('Slide Buttons', () => {
//     it('should have showButtons prop', () => {
//         expect(wrapper.prop('showButtons')).toBeDefined();
//     });
//
//     it('should have container element', () => {
//         expect(typeof wrapper.prop('showButtons') === 'boolean').toBeTruthy();
//     });
//
//     it('should have navigateToProps function', () => {
//         expect(slideButtonsMount.prop('_navigateToPage')).toBeDefined();
//     })
//
//     it('should have navigateToProps function', () => {
//         expect(typeof slideButtonsMount.prop('_navigateToPage') === 'function').toBeTruthy();
//     })
//
//     it('should show slideButtons element if prop showButtons is true', () => {
//         expect(wrapper.find(slideButtons)).toBeDefined();
//     });
//
//     it('should not show slideButtons element if prop showButtons is not true', () => {
//         wrapper.setProps({showButtons: false});
//         expect(
//             wrapper.find(SlideButtonsContainer).contains(slideButtons),
//         ).toBeFalsy();
//     });
//
//     it('should be wrapped in the slideButtons container', () => {
//         expect(wrapper.find(SlideButtonsContainer)).toBeDefined();
//     });
//
//     it('should exist', () => {
//         expect(wrapper.find(SlideButtonsContainer).length).toBeGreaterThan(0);
//     });
// });
