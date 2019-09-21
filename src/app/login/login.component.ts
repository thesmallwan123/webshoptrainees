import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { User } from './listUser';
import { users } from './mock-users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //variables
  title = "Login";

  uName: string;
  pWord: string;

  user: User[] = users;

  private cookieValue: string;
  constructor(private cookieService: CookieService, private router: Router,) { }
  

  ngOnInit():void {
  }



  //function check;
  //cookie of login = IUAW**W%#ZMD?KDW"}
  check(){
    let i = 0;
    if (this.uName == this.user[i].username && this.pWord == this.user[i].password){
      this.cookieService.set('loggedin', 'IUAW**W%#ZMD?KDW}');
      this.cookieValue = this.cookieService.get('loggedin');
      this.router.navigateByUrl('/admin');
    }
    else{
      window.alert("Wrong!!!!");};
    }

  //if submit is pushed
  submit(event){
    this.check();
  }
}
