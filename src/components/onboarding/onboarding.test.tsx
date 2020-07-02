import {mount, shallow} from 'enzyme';
import React from "react";
import Onboarding from ".";
import SlideButtons from "./slideButtons";
import {FlatList} from "react-native";
import Slide from './slide';

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

            const mockFunction = jest.fn((point) => point);

            wrapper.find(FlatList).props('renderItem', mockFunction(<Slide item={{}}/>));

             expect(mockFunction).toHaveBeenCalled();

             expect(mockFunction).toHaveReturnedWith(<Slide item={{}}/>);

        });

        it('should have keyExtractor prop', () => {
            expect(slider.prop('keyExtractor')).toBeDefined();
        });

        it('should have keyExtractor prop to be function', () => {
            expect(slider.prop('keyExtractor')).toBeInstanceOf(Function);
        });

    });

    describe('Slide component capabilities', function () {
        const slideShallow = mount(<Slide item={{}}/>);

        it('should be defined',() => {
            expect(slideShallow.prop('item')).toBeDefined();
        })

        it('should have a prop item that is an object', () => {
            expect(typeof slideShallow.prop('item') === 'object' && slideShallow.prop('item') !== null).toBeTruthy()
        })
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
