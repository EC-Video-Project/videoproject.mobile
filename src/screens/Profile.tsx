import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';

export type ProfileScreenProps = {};

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const {
    logout,
    authState: {isAuthenticated},
  } = useContext(GlobalContext);

  return (
    <View>
      <Text>My Profile</Text>
      {isAuthenticated ? (
        <>
          <Text>User is logged in!</Text>
          <Button onPress={() => logout()} title="Logout" />
        </>
      ) : (
        <Text>User is NOT logged in!</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
