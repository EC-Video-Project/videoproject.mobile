import {AuthState} from '../reducers/AuthReducer';

export const authInitialState: AuthState = {
  isAuthenticated: false,
  refreshToken: '',
  accessToken: '',
  idToken: '',
};
