import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor() { }

  loginData = {
    email: '',
    password: ''
  }

  login() {
    // this.auth.login(this.loginData);
  }

}
