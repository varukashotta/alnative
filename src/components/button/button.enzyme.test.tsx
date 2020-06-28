/**
 * @format
 */

// import 'react-native';
// import React from 'react';
// import Button from '.';
//
// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
//
// it('renders correctly', () => {
//     renderer.create(<Button />);
// });
/**
 * @jest-environment jsdom
 */
import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import Button from '.';
import {Text, TouchableOpacity, View} from "react-native";

describe('Component tested with airbnb enzyme', () => {
    test('App mount with enzyme', () => {
        const wrapper = mount(<Button />);
        expect(wrapper.find(TouchableOpacity).length).toEqual(1);
    });
});