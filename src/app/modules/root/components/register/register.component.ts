import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from '../../services/http-services/account-service/account.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  private subscription: Subscription;
  constructor(private formBuilder: FormBuilder, private accountService: AccountService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.registerForm = this.generateRegisterForm();
  }

  onRegisterButtonClicked(): void {
    if(this.registerForm.valid) {
      this.subscription.add(this.accountService.register(this.registerForm.value)
      .subscribe((response: any) => {
        console.log(response);
      }, (errorResponse: HttpErrorResponse)=> {
        console.log(errorResponse.message);
      }))
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }

  private generateRegisterForm(): FormGroup {
    let nameFormControl = this.formBuilder.control(null,[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40)
    ]);

    let usernameFormControl = this.formBuilder.control(null,[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40)
    ]);
    
    let emailFormControl = this.formBuilder.control(null,[
      Validators.required,
      Validators.email
    ]);

    let passwordFormControl = this.formBuilder.control(null,[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]);

    let confirmPasswordFormControl = this.formBuilder.control(null,[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40)
    ]);

    let websiteFormControl = this.formBuilder.control(null);

    let aboutFormControl = this.formBuilder.control(null);

    return this.formBuilder.group({
      name: nameFormControl,
      password: passwordFormControl,
      confirmPassword: confirmPasswordFormControl,
      website: websiteFormControl,
      about: aboutFormControl,
      username: usernameFormControl,
      email: emailFormControl
    });
  }
}
