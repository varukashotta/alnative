import {Text, View} from "react-native";
import React from "react";
import Navigation from "../src/components/navigation";

const TestComponent = ({text}) => <View><Text>{text}</Text></View>

const Home = () => <TestComponent text={'Page One'}/>;

const Two = () => <TestComponent text={'Page Two'}/>;

const Stack = () => <TestComponent text={'Stack 1'}/>;

const StackTwo = () => <TestComponent text={'Stack 2'}/>;


const bottomLinks = [
    {
        iconFocused: <Text>T</Text>,
        icon: <Text>Y</Text>,
        label: 'Waruka',
        screen: Home,
        screenName: 'Home'
    },
    {
        iconFocused: <Text>T</Text>,
        icon: <Text>Y</Text>,
        label: 'Waruka2',
        screen: Two,
        screenName: 'Homely'
    }
]

const stacked = [
    {
        name: 'Achillies',
        component: Stack,
        visibilityState: false
    },
    {
        name: 'Deda',
        component: StackTwo,
    }
]

const NavDemo = () => <Navigation stackedScreens={{screens: stacked}}
                                  bottomLinks={{bottomLinks, defaultScreen: 'Home'}}/>

export default NavDemo;
