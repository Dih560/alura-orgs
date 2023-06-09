import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import BestProducersScreen from './screens/BestProducers';

import HomeSVG from '../assets/home.svg';
import HeartSVG from '../assets/coracao.svg';

const Tab = createBottomTabNavigator();

const handleTabIcon = (screen, color) => {
  let Icon;
  switch (screen) {
    case 'BestProducers':
      Icon = HeartSVG;
      break;
    case 'Producers':
    default:
      Icon = HomeSVG;
      break;
  }

  return <Icon color={color} width={25} height={25} />;
};

const Routes = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: '#2A9F85',
      tabBarInactiveTintColor: '#C7C7C7',
      tabBarIcon: ({color}) => handleTabIcon(route.name, color),
      tabBarLabelStyle: {fontSize: 12, fontFamily: 'Montserrat-Bold'},
    })}>
    <Tab.Screen name="Producers" component={Home} options={{title: 'Início'}} />
    <Tab.Screen
      name="BestProducers"
      component={BestProducersScreen}
      options={{title: 'Melhores'}}
    />
  </Tab.Navigator>
);

export default Routes;
