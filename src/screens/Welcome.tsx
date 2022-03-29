import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';

const Welcome: React.FC = () => {
  const {login} = useContext(GlobalContext);

  const doSignIn = () => {
    login();
  };

  return (
    <View>
      <Text>Welcome to VideoProject</Text>
      <Button onPress={doSignIn} title="Sign in" />
    </View>
  );
};

export default Welcome;
