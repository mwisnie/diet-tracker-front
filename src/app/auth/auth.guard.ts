import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as fromRoot from '../app.reducer';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromRoot.State>,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuthenticated).pipe(take(1));
  }

}
