import SlideButtons from "./index";
import {mount} from "enzyme";
import * as React from "react";
import {Button} from "./slideButtonStyles";

describe('SlideButton component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<SlideButtons activeSlide={3} numberOfSlides={0} />);
    })

    it('should exist', () => {
        expect(wrapper.exists()).toBeTruthy();
    })

    it('should have total slides prop', () => {
        expect(wrapper.prop('numberOfSlides')).toBeDefined()
    })

    it('should have renderButtons method', () => {
        expect(wrapper.contains(Button)).toBeDefined();
    })


    it('should have activeSlide prop', () => {
        expect(wrapper.prop('activeSlide')).toBeDefined();
    })

    it('should have activeSlide that is an int prop', () => {
        expect(typeof  wrapper.prop('activeSlide') === 'number').toBeTruthy();
    })

})