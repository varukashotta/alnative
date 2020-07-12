import {Text, View} from "react-native";
import React from "react";
import Navigation from "../src/components/navigation";

const bottomLinks = [
    {
        iconFocused: <Text>T</Text>,
        icon: <Text>Y</Text>,
        label: 'Waruka',
        screen: () => <View><Text>here</Text></View>,
    screenName: 'Home'
},
{
    iconFocused: <Text>T</Text>,
    icon: <Text>Y</Text>,
    label: 'Waruka2',
        screen: () => <View><Text>here2</Text></View>,
    screenName: 'Homely'
}
]

const stacked = [
    {
        name: 'Achillies',
        component: () => <View><Text>1</Text></View>,
    visibilityState: false
},
{
    name: 'Achilliesy',
        component: () => <View><Text>2</Text></View>,
}
]

const NavDemo = () => <Navigation stackedScreens={{screens: stacked}} bottomLinks={{bottomLinks, defaultScreen: 'Home2'}}/>

export default NavDemo;