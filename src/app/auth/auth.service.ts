import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

import { UIService } from '../shared/ui.service';
import { AuthData } from './auth-data.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticatedSubj = new BehaviorSubject<boolean>(false);
  userSubj = new Subject<User>();

  constructor(private router: Router,
              private uiService: UIService) { }

  login(authData: AuthData): void {
    this.uiService.isLoadingSubj.next(true);

    // TODO:
    // POST auth data to /login
    // handle response, set user
    // set isLoading to false

    // right now, mock login
    this.isAuthenticatedSubj.next(true);
    this.userSubj.next(new User('user', 'user'));
    setTimeout(() => this.uiService.isLoadingSubj.next(false), 3000);
  }

  logout(): void {
    this.isAuthenticatedSubj.next(false);
    this.userSubj.next(null);
  }

}
