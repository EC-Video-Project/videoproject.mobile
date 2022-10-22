import React, {createContext, useEffect, useReducer} from 'react';
import * as AppAuth from 'react-native-app-auth';
import SInfo from 'react-native-sensitive-info';
import {authInitialState} from './initialState/authInitialState';
import {authReducer, AuthState} from './reducers/AuthReducer';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';
const ID_TOKEN = 'idToken';

const sInfoOptions: SInfo.RNSensitiveInfoOptions = {
  sharedPreferencesName: 'mySharedPrefs',
  keychainService: 'myKeychain',
};

const authConfig: AppAuth.AuthConfiguration = {
  issuer: 'https://cognito-idp.us-west-2.amazonaws.com/us-west-2_4BQDdJ7hN',
  clientId: '61jtq52fal7ki6t03op2kaei3u',
  redirectUrl: 'videoproject.ethanholman.com://oauth',
  scopes: ['phone', 'email', 'openid', 'profile'],
  connectionTimeoutSeconds: 10,
  serviceConfiguration: {
    authorizationEndpoint:
      'https://videoproject-dev2.auth.us-west-2.amazoncognito.com/oauth2/authorize',
    tokenEndpoint:
      'https://videoproject-dev2.auth.us-west-2.amazoncognito.com/oauth2/token',
    revocationEndpoint:
      'https://videoproject-dev2.auth.us-west-2.amazoncognito.com/oauth2/revoke',
  },
};

export type GlobalContextType = {
  authState: AuthState;
  login: () => void;
  logout: () => void;
};

export const GlobalContext = createContext<GlobalContextType>({} as any);

const GlobalProvider: React.FC<React.ReactNode> = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  const init = async () => {
    const refreshToken = await SInfo.getItem(REFRESH_TOKEN, sInfoOptions);
    const accessToken = await SInfo.getItem(ACCESS_TOKEN, sInfoOptions);
    const idToken = await SInfo.getItem(ACCESS_TOKEN, sInfoOptions);

    if (refreshToken && accessToken && idToken)
      authDispatch({
        type: 'login',
        payload: {refreshToken, accessToken, idToken},
      });
  };

  useEffect(() => {
    init();
  }, []);

  const login = () => {
    AppAuth.authorize(authConfig)
      .then(async ({refreshToken, accessToken, idToken}) => {
        console.info('[Login] success');
        if (!accessToken || !refreshToken)
          throw 'Access token and/or refresh token not found';

        await SInfo.setItem(ACCESS_TOKEN, accessToken, sInfoOptions);
        await SInfo.setItem(REFRESH_TOKEN, refreshToken, sInfoOptions);
        await SInfo.setItem(ID_TOKEN, idToken, sInfoOptions);

        console.log(refreshToken);

        authDispatch({
          type: 'login',
          payload: {refreshToken, accessToken, idToken},
        });
      })
      .catch(error => {
        console.warn('[Login] failure -- check logs');
        console.log(error);
      });
  };

  const logout = async () => {
    // this appears to be silently failing, as refresh tokens still work following this call
    await AppAuth.revoke(authConfig, {tokenToRevoke: authState.refreshToken});

    await SInfo.deleteItem(REFRESH_TOKEN, sInfoOptions);
    await SInfo.deleteItem(ACCESS_TOKEN, sInfoOptions);
    await SInfo.deleteItem(ID_TOKEN, sInfoOptions);

    authDispatch({type: 'logout'});
  };

  return (
    <GlobalContext.Provider value={{authState, login, logout}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
