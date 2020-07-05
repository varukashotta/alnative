import React from 'react';
import {Text, View} from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Onboarding from '../../src/components/onboarding'

// import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

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
        <Onboarding data={[{heading: 'Slide 1', text: 'This is a text area'},{heading: 'Step 2', text: 'This is a text area'}]} slideButtons={true}/>
    ))
