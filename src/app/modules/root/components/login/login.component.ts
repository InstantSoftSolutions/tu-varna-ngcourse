import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../services/http-services/account-service/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from 'src/app/modules/shared/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  @Input() shouldClearForm: boolean;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private tokenService: TokenService) {}

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
      this.accountService.login(this.loginForm.value)
      .subscribe((response: { accessToken: string, tokenType: string}) => {
        this.tokenService.setToken(response.accessToken);

        this.loginForm.reset();
      }, (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.message);
      })
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
