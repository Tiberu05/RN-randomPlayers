import React from 'react';

//NAVIGATION
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MyStack from './Navigation';

//CONTEXT
import Store, { Context } from './src/context/Store';

//SCREENS AND COMPONENTS


export default function App() {
  return (
    <Store>
      <MyStack />
    </Store>
  )
};
