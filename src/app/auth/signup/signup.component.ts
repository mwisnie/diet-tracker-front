import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { User } from '../user.model';
import { ErrorStateMatcher } from '@angular/material';

class PasswordConfirmStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return form.hasError('notSame');
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading$: Observable<boolean>;
  signupForm: FormGroup;
  passwordConfirmErrorMatcher = new PasswordConfirmStateMatcher();

  constructor(private store: Store<fromRoot.State>,
              private authService: AuthService) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    this.signupForm = new FormGroup({
        username: new FormControl('', { validators: [Validators.required, Validators.minLength(3)] }),
        email: new FormControl('', { validators: [Validators.required, Validators.email] }),
        password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
        passwordConfirm: new FormControl('')
    }, this.checkMatchingPassword);
  }

  checkMatchingPassword(formGroup: FormGroup): { notSame: boolean } {
    const pass = formGroup.controls.password.value;
    const confirmPass = formGroup.controls.passwordConfirm.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit(): void {
    const user = new User(
      this.signupForm.value.username,
      this.signupForm.value.password,
      this.signupForm.value.email
    );
    this.authService.signup(user);
  }

}
