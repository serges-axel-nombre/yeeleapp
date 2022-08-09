/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Appearance } from 'react-native-appearance';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackMulti from './StackMulti';
import login from './login';
import StackSettings from './StackSettings';
import StackStats from './StackStats';
import about from './about';
import scan from './scan';

// icons
import SvgCog from '../icons/Svg.Cog';
import SvgHome from '../icons/Svg.Home';
import SvgPages from '../icons/Svg.Pages';
import SvgStats from '../icons/Svg.Stats';

const Tab = createBottomTabNavigator();

// activeTintColor: {
//   light: colors.darkColor,
//   dark: colors.grey
// },
// inactiveTintColor: {
//   light: colors.grey,
//   dark: colors.white20
// }

export default () => {
  // get system preference
  const colorScheme = Appearance.getColorScheme();
  console.log('react-native-appearance::Appearance', colorScheme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'purple',
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveGrey,
        tabBarStyle: {
          backgroundColor: 'brown',
          borderTopColor: 'yellow'
        },
        tabBarItemStyle: {
          // backgroundColor: 'blue'
        }
      }}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarIcon: ({ focused }) => <SvgHome active={focused} />,
          tabBarLabel: 'Connexion'
        }}
      />

      <Tab.Screen
        name="login"
        component={login}
        options={{
          tabBarIcon: ({ focused }) => <SvgHome active={focused} />,
          tabBarLabel: 'login'
        }}
      />

      <Tab.Screen
        name="liste_des_evenements_StackMulti"
        component={StackMulti}
        options={{
          tabBarIcon: ({ focused }) => <SvgStats active={focused} />,
          tabBarLabel: 'Liste des évènements'
        }}
      />
    



      <Tab.Screen
        name="liste_des_participants_StackStats"
        component={StackStats}
        options={{
          tabBarIcon: ({ focused }) => <SvgStats active={focused} />,
          tabBarLabel: 'Liste des participants'
        }}
      />
      <Tab.Screen
        name="QRcode"
        component={scan}
        options={{
          tabBarIcon: ({ focused }) => <SvgCog active={focused} />,
          tabBarLabel: 'Scanner un QR code'
        }}
      />
      <Tab.Screen
        name="About"
        component={about}
        options={{
          tabBarIcon: ({ focused }) => <SvgStats active={focused} />,
          tabBarLabel: 'A propos'
        }}
      />

      <Tab.Screen
        name="deconnexion_StackSettings"
        component={StackSettings}
        options={{
          tabBarIcon: ({ focused }) => <SvgCog active={focused} />,
          tabBarLabel: 'Deconnection'
        }}
      />
      
    </Tab.Navigator>
  );
};
