import React from 'react';
import {authorize} from 'react-native-app-auth';
import AppNavContainer from './src/navigation/AppNavContainer';

const App: React.FC = () => {
  const config = {
    issuer: 'https://cognito-idp.us-west-2.amazonaws.com/us-west-2_4BQDdJ7hN',
    clientId: 'la1ibkuc5j0uuh23dpcqeiufu',
    redirectUrl: 'videoproject.ethanholman.com://oauth',
    scopes: ['phone', 'email', 'openid', 'profile'],
  };

  authorize(config)
    .then(result => {
      console.log('======ITWORKED-=======');
      console.log(result);
    })
    .catch(error => {
      console.log('======BAD!!-=======');
      console.log(error);
    });

  return <AppNavContainer />;
};

export default App;
