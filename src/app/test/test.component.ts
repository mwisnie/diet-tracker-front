import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromRoot from '../app.reducer';
import { AuthService } from '../auth/auth.service';
import { UIService } from '../shared/ui.service';
import { User } from '../auth/user.model';

// TODO: delete when unnecessary

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private isAuthenticated$: Observable<boolean>;
  private isLoading$: Observable<boolean>;
  private user$: Observable<User>;

  constructor(private authService: AuthService,
        private uiService: UIService,
        private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.user$ = this.store.select(fromRoot.getUser);

  }

  mockLogin() {
    this.authService.login({ username: 'test', password: 'test' });
  }

  logout() {
    this.authService.logout();
  }

  showSnackbar() {
    this.uiService.showSnackbar('hello', null, 1000);
  }

}
