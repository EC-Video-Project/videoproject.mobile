import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalContext';
import LoginNavigator from './LoginNavigator';
import TabNavigator from './TabNavigator';

export type AppNavContainerProps = {};

const AppNavContainer: React.FC<AppNavContainerProps> = () => {
  const {
    authState: {isAuthenticated},
  } = useContext(GlobalContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
