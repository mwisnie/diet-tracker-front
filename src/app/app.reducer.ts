import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';
import * as fromUI from './shared/ui.reducer';

export interface State {
  auth: fromAuth.AuthState;
  ui: fromUI.UIState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer,
  ui: fromUI.uiReducer
};

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const getUser = createSelector(getAuthState, fromAuth.getUser);
export const getUIState = createFeatureSelector<fromUI.UIState>('ui');
export const getIsLoading = createSelector(getUIState, fromUI.getIsLoading);
