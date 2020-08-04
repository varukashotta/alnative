import React from 'react';
import {Text, View} from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Onboarding from '../../src/components/onboarding'

import CenterView from './CenterView';
import Welcome from './Welcome';
import {onboardingData} from "./generator";
import Navigation from "../../src/components/navigation";
import {bottomLinksIP, StackScreensIP} from "../../src/components/navigation/screens";
import NavDemo from "../../demo/navigation";
import UserProfileDemo from "../../demo/userProfile";
import UserSettings from "../../src/components/userSettings";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () => (
//     <Button onPress={action('clicked-text')}>
//       <Text>Hello Button</Text>
//     </Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ));


storiesOf('Onboarding', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => (
        <Onboarding data={onboardingData()} slideButtons={true}/>
    ))

storiesOf('UserSettings', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => <UserSettings/>)

storiesOf('Navigation', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => <NavDemo/>)

storiesOf('UserProfile', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => <UserProfileDemo/>)
