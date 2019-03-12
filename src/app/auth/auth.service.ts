import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import * as fromRoot from '../app.reducer';
import { UIService } from '../shared/ui.service';
import { AuthData } from './auth-data.model';
import * as authActions from './auth.actions';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubj = new Subject<User>();

  constructor(private router: Router,
              private uiService: UIService,
              private store: Store<fromRoot.State>) { }

  login(authData: AuthData): void {
    this.uiService.isLoadingSubj.next(true);

    // TODO:
    // POST auth data to /login
    // handle response, set user
    // set isLoading to false

    // right now, mock login
    this.store.dispatch(new authActions.SetAuthenticated());
    this.userSubj.next(new User('user', 'user'));
    setTimeout(() => this.uiService.isLoadingSubj.next(false), 3000);
  }

  logout(): void {
    this.store.dispatch(new authActions.SetUnauthenticated());
    this.userSubj.next(null);
  }

}
