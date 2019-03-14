import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/app.reducer';

import * as fromRoot from '../../app.reducer';
import { AuthData } from '../auth-data.model';
import { AuthService } from '../auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>,
              private authService: AuthService) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    this.loginForm = new FormGroup({
        username: new FormControl('', { validators: [Validators.required] }),
        password: new FormControl('', { validators: [Validators.required] })
        });
  }

  onSubmit() {
    const authData: AuthData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.authService.login(authData);
  }

}
