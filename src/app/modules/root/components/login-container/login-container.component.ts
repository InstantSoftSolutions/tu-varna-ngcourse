import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  shouldClearLogin: boolean;
  shouldClearRegister: boolean;

  constructor() {
    this.shouldClearLogin = true;
    this.shouldClearRegister = true;
  }

  ngOnInit(): void {
  }

  onSelectedTabChanged(event: any): void {
    if(event.index === 0) {
      // Login component
      this.shouldClearRegister = true;
      this.shouldClearLogin = false;
    }
    if (event.index === 1) {
      // Register component
      this.shouldClearRegister = false;
      this.shouldClearLogin = true;
    }
  }
}
