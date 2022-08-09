import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import eventscreen from '../screens/Stats';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Stats" component={Stackevent} />
  </Stack.Navigator>
);
