import React, {ComponentType, ReactNode} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {Misc} from '../utils';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

interface bottomMenuLinkIP {
  icon: ReactNode;
  iconFocused: ReactNode;
  label: string;
  screenName: string;
  screen: ComponentType<any>;
}

export interface bottomLinksIP {
  bottomLinks?: bottomMenuLinkIP[];
  defaultScreen?: string;
}

/**
 *
 * @param bottomLinks
 */
const bottomMenuLinks = ({bottomLinks}: bottomLinksIP): any[] => {
  let navs: any[] = [];

  if (bottomLinks) {
    for (let i = 0; i < bottomLinks.length; i++) {
      const {icon, iconFocused, label, screenName, screen} = bottomLinks[i];
      navs.push(
        <Tab.Screen
          key={i}
          name={screenName}
          component={screen}
          options={{
            tabBarLabel: label,
            tabBarIcon: ({focused}) => (focused ? iconFocused : icon),
          }}
        />,
      );
    }
  }
  return navs;
};

const bottomScreen = ({
  bottomLinks,
  defaultScreen,
}: bottomLinksIP): ReactNode => {
  const container = () => (
    <View style={{flex: 1}}>
      <Tab.Navigator initialRouteName={defaultScreen}>
        {bottomMenuLinks({bottomLinks})}
      </Tab.Navigator>
    </View>
  );

  return (
    <Stack.Screen
      name="Home"
      component={container}
      options={{headerShown: false}}
    />
  );
};

export interface StackScreensIP {
  screens: StackScreenIP[];
}

interface StackScreenIP {
  name: string;
  component: ComponentType<any>;
  options?: StackNavigationOptions;
  visibilityState?: boolean;
}

/**
 *
 * @param screens
 */
const stackScreens = ({screens}: StackScreensIP): any[] => {
  let renderedScreens: any[] = [];
  for (let i = 0; i < screens.length; i++) {
    const {name, component, options, visibilityState = true} = screens[i];
    visibilityState &&
      renderedScreens.push(
        <Stack.Screen
          key={i}
          name={name}
          component={component}
          options={options}
        />,
      );
  }

  return renderedScreens;
};

interface BottomNavOptionsIP {
  bottomLinks?: bottomLinksIP;
  stackedScreens: StackScreensIP;
}

/**
 * @param bottomLinks
 * @param defaultScreen
 * @param stackedScreens
 * @constructor
 */
const Screens = ({bottomLinks, stackedScreens}: BottomNavOptionsIP) => {
  return (
    <Stack.Navigator>
      {bottomLinks && Misc.objectChecker(bottomLinks) && bottomScreen(bottomLinks)}
      {stackScreens(stackedScreens)}
    </Stack.Navigator>
  );
};

export default Screens;
