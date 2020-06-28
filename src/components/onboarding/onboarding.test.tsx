import {mount} from 'enzyme';
import React from "react";
import Onboarding from ".";

describe('Onboarding component', () => {

    let wrapper:any;

    beforeEach(() => {
        wrapper = mount(<Onboarding data={[]}/>);
    })

    it('should render without issues', () => {
        expect(wrapper.length).toBe(1);
    });

    it('should have data props', () => {
        expect(wrapper.prop('data')).toEqual([]);
        // const data = [];
        // expect(wrapper.prop('data')).toEqual(data);
    })
});
