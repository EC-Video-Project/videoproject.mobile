import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ReactDemo from '../ReactDemo';

const AppNavContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <ReactDemo />
    </NavigationContainer>
  );
};

export default AppNavContainer;
