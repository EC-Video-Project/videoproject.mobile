export type AuthState = {
  isAuthenticated: boolean;
  refreshToken: string;
  accessToken: string;
  idToken: string;
};

export type AuthAction =
  | {
      type: 'login';
      payload: {refreshToken: string; accessToken: string; idToken: string};
    }
  | {type: 'logout'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isAuthenticated: true,
        refreshToken: action.payload.refreshToken,
        accessToken: action.payload.accessToken,
        idToken: action.payload.idToken,
      };
    case 'logout':
      return {
        ...state,
        isAuthenticated: false,
        refreshToken: '',
        accessToken: '',
        idToken: '',
      };
    default:
      return state;
  }
};
