import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';

export interface State {
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer
};

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
