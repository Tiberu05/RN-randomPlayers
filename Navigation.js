import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import RandomScreen from './src/screens/RandomScreen';

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#001f3f',
        accent: '#001f3f',
        background: '#fff',
    }
}

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer
        theme={myTheme}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Random"
          component={RandomScreen}
          options={{ title: 'Random' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;