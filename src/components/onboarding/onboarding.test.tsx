import {mount, shallow} from 'enzyme';
import React from "react";
import Onboarding from ".";
import SlideButtons from "./slideButtons";
import {FlatList, View} from "react-native";
import {array} from "@storybook/addon-knobs";

describe('Onboarding component', () => {

    let wrapper: any;

    let slider: any;

    beforeEach(() => {
        wrapper = mount(<Onboarding slideButtons={true} data={[{heading: 'Heading'}]}/>);

        slider = wrapper.find(FlatList);

    })

    it('should render without issues', () => {
        expect(wrapper.length).toBe(1);
    });

    it('should have data props', () => {
        expect(wrapper.prop('data')).toBeDefined();
    });

    it('should have data props that is an array', () => {
        expect(Array.isArray(wrapper.prop('data'))).toBeTruthy();
    });

    describe('Slider Component Capabilities', () => {

        it('should have FlatList Component as child component', () => {
            expect(wrapper.find(FlatList).length).toEqual(1);
        });

        it('should have horizontal prop', () => {
            expect(slider.prop('horizontal')).toBeDefined();
        });

        it('should have horizontal prop', () => {
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

            const mockFunction = jest.fn((point) => shallow(point));

            wrapper.find(FlatList).props('renderItem', mockFunction(<View/>));

             expect(mockFunction).toHaveBeenCalled();

             expect(mockFunction).toHaveReturnedWith({});

        });

        it('should have keyExtractor prop', () => {
            expect(slider.prop('keyExtractor')).toBeDefined();
        });

        it('should have keyExtractor prop to be function', () => {
            expect(slider.prop('keyExtractor')).toBeInstanceOf(Function);
        });

        // it('should have keyExtractor prop to be function', () => {
        //     const mockFunction = jest.fn((point) => point.id);
        //
        //     slider.props('keyExtractor', mockFunction({item:{id: 1}}));
        //
        //     expect(mockFunction).toHaveBeenCalled();
        //
        //
        //
        // });
    });

    describe('Slide Buttons', () => {
        it('should have show slide button props', () => {
            expect(wrapper.prop('slideButtons')).toBeDefined();
        });

        it('should show slide buttons component if props is true', () => {
            wrapper.setProps({'slideButtons': true});

            expect(wrapper.find(<SlideButtons/>)).toBeDefined();

            expect(wrapper.contains(<SlideButtons/>)).toBeTruthy();
        })
    })


});
