import { Component, inject } from '@angular/core';
import { LoginComponent } from "../login-component/login-component";
import { FormGroup, FormBuilder, FormControlName, Validators, ReactiveFormsModule } from '@angular/forms';
import { Authentication } from '../../services/authentication';
import { SignupModel } from '../../models/global.model';

@Component({
  selector: 'app-signup-component',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-component.html',
  styleUrl: './signup-component.css',
})
export class SignupComponent {

  fb = inject(FormBuilder);

  authenticationService = inject(Authentication);

  signupForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    age: [0, Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  ngOnInit() {
    this.authenticationService.clearToken();
  }

  submitForm() {
    // console.log(this.signupForm.controls.username.errors?.['required'])
    // console.log(this.signupForm.controls.username.hasError('minlength'))

    if (this.signupForm.valid) {

      const formData: SignupModel = {
        username: this.signupForm.value.username!,
        age: this.signupForm.value.age!,
        gender: this.signupForm.value.gender!,
        email: this.signupForm.value.email!,
        password: this.signupForm.value.password!
      };

      this.authenticationService.signup(formData);

    } else {
      this.signupForm.markAllAsTouched();
    }




  }

}
