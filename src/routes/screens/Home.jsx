import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Producers from '../../screens/Producers';
import Producer from '../../screens/Producer';
import Basket from '../../screens/Basket';
import Resume from '../../screens/Resume';

const Stack = createStackNavigator();

const Home = ({component: Component}) => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false, gestureEnabled: true}}>
    <Stack.Screen name="Home" component={Component} />
    <Stack.Screen name="Producer" component={Producer} />
    <Stack.Screen name="Basket" component={Basket} />
    <Stack.Screen name="Resume" component={Resume} />
  </Stack.Navigator>
);

Home.defaultProps = {
  component: Producers,
};

export default Home;
