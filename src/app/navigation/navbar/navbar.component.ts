import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  isAuthenticatedSubscr: Subscription;

  constructor(private authService: AuthService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.isAuthenticatedSubscr = this.authService.isAuthenticatedSubj
      .subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  ngOnDestroy() {
    this.isAuthenticatedSubscr.unsubscribe();
  }

  selectLang(lang: string): void {
    this.translate.use(lang);
  }

  logout(): void {
    this.authService.logout();
  }

}
