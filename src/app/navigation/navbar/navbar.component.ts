import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService,
              private translate: TranslateService,
              private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);
  }

  selectLang(lang: string): void {
    this.translate.use(lang);
  }

  logout(): void {
    this.authService.logout();
  }

}
