import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = 'dummy'
  errorMessage = 'Invalid login'
  invalidLogin = false

  handleLogin() {
    // console.log(this.username);
    if(this.username === 'in28minutes' && this.password === 'dummy') {
        this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
