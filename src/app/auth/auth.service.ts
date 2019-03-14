import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import * as uiActions from '../shared/ui.actions';
import { AuthData } from './auth-data.model';
import * as authActions from './auth.actions';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private store: Store<fromRoot.State>) { }

  login(authData: AuthData): void {
    this.store.dispatch(new uiActions.StartLoading());

    // TODO:
    // POST auth data to /login
    // handle response, set user
    // set isLoading to false

    // right now, mock login
    this.store.dispatch(new authActions.SetAuthenticated());
    this.store.dispatch(new authActions.SetUser(new User(authData.username, authData.password, '')));
    setTimeout(() => {
      this.router.navigate(['products']);
      this.store.dispatch(new uiActions.StopLoading());
    }, 3000);
  }

  logout(): void {
    this.router.navigate(['login']);
    this.store.dispatch(new authActions.SetUnauthenticated());
    this.store.dispatch(new authActions.SetUser(null));
  }

  signup(user: User): void {
    console.log('todo: implement signup');
  }

}
