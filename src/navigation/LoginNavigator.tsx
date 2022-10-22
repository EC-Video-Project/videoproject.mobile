import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../screens/Welcome';
import routeNames from './routeNames';

const Stack = createNativeStackNavigator();

const LoginNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routeNames.WELCOME} component={Welcome} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
