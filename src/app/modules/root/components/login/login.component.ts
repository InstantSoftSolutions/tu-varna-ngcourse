import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  @Input() shouldClearForm: boolean;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.generateLoginForm();
  }

  ngOnChanges(): void {
    if(this.shouldClearForm && this.loginForm !== undefined ) {
      this.loginForm.reset();
    }
  }

  onLoginButtonClicked(): void {
    if (this.loginForm.valid) {

    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }

  private generateLoginForm(): FormGroup {
    let usernameOrEmailFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    let passwordFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    return this.formBuilder.group({
      usernameOrEmail: usernameOrEmailFormControl,
      password: passwordFormControl
    });
  }
}
