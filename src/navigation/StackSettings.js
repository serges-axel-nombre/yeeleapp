import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import SettingsScreen from '../screens/Settings';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Deconnection" component={SettingsScreen} />
  </Stack.Navigator>
);
