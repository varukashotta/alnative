import * as React from "react";
import Slide from "./index";
import {mount} from 'enzyme';
import {Container} from "./slide.styles";

describe('Slide Component', () => {

    let wrapper:any;

    beforeEach(() => {
        wrapper = mount(<Slide/>)
    })

    it('should exist', () => {
        expect(wrapper.length).toEqual(1);
    })

    it('should have container prop', () => {
        expect(wrapper.find(Container)).toBeDefined()
    })
})