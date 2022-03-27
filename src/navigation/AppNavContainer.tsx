import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginNavigator from './LoginNavigator';
import TabNavigator from './TabNavigator';

export type AppNavContainerProps = {};

const AppNavContainer: React.FC<AppNavContainerProps> = () => {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
