import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  data = {
    username: 'admin',
    password: '123456',
    userName: '',
    passWord: '',
  };

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }
  public login() {
    if (this.data.username === this.data.userName && this.data.password === this.data.passWord) {
      this.router.navigate(['main']);
    } else {
      const tip = document.getElementById('tip');
      tip.style.visibility = 'visible';
    }
  }
}
