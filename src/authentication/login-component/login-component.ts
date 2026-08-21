import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authentication } from '../../services/authentication';
import { LoginModel } from '../../models/global.model';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

  fb = inject(FormBuilder);

  authenticationService = inject(Authentication);

  ngOnInit() {
    this.authenticationService.clearToken();
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  login() {
    if (this.loginForm.valid) {
      const loginData: LoginModel = {
        username: this.loginForm.value.username!,
        password: this.loginForm.value.password!
      }
      this.authenticationService.login(loginData);

    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }
}


