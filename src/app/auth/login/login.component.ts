import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/app.reducer';

import * as fromRoot from '../../app.reducer';
import { AuthData } from '../auth-data.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading$: Observable<boolean>;
  loginForm: FormGroup;

  constructor(private store: Store<fromRoot.State>,
              private authService: AuthService) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    this.loginForm = new FormGroup({
        username: new FormControl('', { validators: [Validators.required] }),
        password: new FormControl('', { validators: [Validators.required] })
        });
  }

  onSubmit(): void {
    const authData: AuthData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.authService.login(authData);
  }

}
