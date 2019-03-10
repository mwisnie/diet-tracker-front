import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UIService } from '../shared/ui.service';

// TODO: delete when unnecessary

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private isAuthenticated = false;
  private user = null;
  private isLoading = false;
  private isAuthenticatedSubscr: Subscription;
  private userSubscr: Subscription;
  private isLoadingSubscr: Subscription;

  constructor(private authService: AuthService,
        private uiService: UIService) { }

  ngOnInit() {
    this.isAuthenticatedSubscr = this.authService.isAuthenticatedSubj.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
    this.userSubscr = this.authService.userSubj.subscribe(user => {
      this.user = user;
    });
    this.isLoadingSubscr = this.uiService.isLoadingSubj.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
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
