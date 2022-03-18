import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './TabNavigator';

export type AppNavContainerProps = {};

const AppNavContainer: React.FC<AppNavContainerProps> = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
