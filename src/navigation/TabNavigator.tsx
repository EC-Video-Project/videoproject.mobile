import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FeedScreen from '../screens/Feed';
import MyStuffScreen from '../screens/MyStuff';
import ProfileScreen from '../screens/Profile';
import routeNames from './routeNames';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => (
  <Tab.Navigator
    initialRouteName={routeNames.FEED_SCREEN}
    screenOptions={{headerShown: false}}>
    <Tab.Screen name={routeNames.MY_STUFF_SCREEN} component={MyStuffScreen} />
    <Tab.Screen name={routeNames.FEED_SCREEN} component={FeedScreen} />
    <Tab.Screen name={routeNames.PROFILE_SCREEN} component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
