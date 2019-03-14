import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER } from './auth.actions';
import { User } from './user.model';

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        isAuthenticated: false
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}

export const getIsAuthenticated = (state: AuthState) => state.isAuthenticated;
export const getUser = (state: AuthState) => state.user;